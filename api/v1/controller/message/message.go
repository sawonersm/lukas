package conversation

import (
	"time"

	Gin "github.com/gin-gonic/gin"
	"github.com/google/uuid"

	Di "check24/lucas/v1/kernel/di"

	InterlocutorEnum "check24/lucas/v1/business/enum/interlocutor"
	Response "check24/lucas/v1/controller/response"
	Model "check24/lucas/v1/data/model"
	ConversationRepository "check24/lucas/v1/data/repository/conversation"
)

func Routes(router *Gin.Engine, di *Di.Di) {
	router.POST("/conversation/:hash/message", func(c *Gin.Context) {
		addMessage(c, di)
	})
}

/**
 * Add message to conversation
 */
func addMessage(c *Gin.Context, di *Di.Di) {

	// Prepare request parameters
	hash := c.Param("hash")
	parameters := struct {
		Message string `json:"message"`
	}{}
	c.BindJSON(&parameters)

	// Find th sconversation
	conversation := ConversationRepository.GetByHash(di, hash)

	// Add the message
	message := &Model.Message{
		Hash:         uuid.New().String(),
		Message:      parameters.Message,
		Conversation: conversation.Id,
		Interlocutor: uint(InterlocutorEnum.USER),
		CreatedAt:    time.Time{},
		UpdatedAt:    time.Time{},
	}
	di.GetDb().GetConnection().Create(message)

	// Ask Lucas
	askResponse := di.GetRasa().Ask(conversation.Hash, parameters.Message)

	// Save responses in database
	var messages []Model.Message
	for _, response := range askResponse.Responses {
		message := &Model.Message{
			Hash:         uuid.New().String(),
			Message:      response.Text,
			Conversation: conversation.Id,
			Interlocutor: uint(InterlocutorEnum.BOT),
			CreatedAt:    time.Time{},
			UpdatedAt:    time.Time{},
		}
		di.GetDb().GetConnection().Create(message)
		messages = append(messages, *message)
	}

	var responses []Response.Message
	for _, message := range messages {
		responses = append(responses, Response.Message{
			Hash: message.Hash,
			Text: message.Message,
		})
	}

	c.JSON(200, responses)
}
