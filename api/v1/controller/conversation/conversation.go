package conversation

import (
	"time"

	"github.com/google/uuid"

	Gin "github.com/gin-gonic/gin"

	Response "check24/lucas/v1/controller/response"
	Model "check24/lucas/v1/data/model"
	Di "check24/lucas/v1/kernel/di"
)

func Routes(router *Gin.Engine, di *Di.Di) {
	router.POST("/conversation", func(c *Gin.Context) {
		createConversation(c, di)
	})
}

/**
 * Create a conversation
 */
func createConversation(c *Gin.Context, di *Di.Di) {
	conversation := &Model.Conversation{
		Hash:      uuid.New().String(),
		CreatedAt: time.Time{},
		UpdatedAt: time.Time{},
	}

	di.GetDb().GetConnection().Create(conversation)

	c.JSON(200, Response.Conversation{
		Hash: conversation.Hash,
	})
}
