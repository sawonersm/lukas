package model

import (
	"database/sql"
	"time"
)

type Message struct {
	Id           uint `gorm:"primaryKey;autoIncrement"`
	Hash         string
	Message      string
	Conversation uint
	Interlocutor uint
	CreatedAt    time.Time
	UpdatedAt    time.Time
	DeletedAt    sql.NullTime
}

func (Message) TableName() string {
	return "message"
}
