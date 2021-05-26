package conversation

import (
	Model "check24/lucas/v1/data/model"
	Di "check24/lucas/v1/kernel/di"
)

func GetByHash(di *Di.Di, hash string) *Model.Conversation {
	conversation := &Model.Conversation{}
	di.GetDb().GetConnection().Where("hash = ?", hash).First(conversation)
	return conversation
}
