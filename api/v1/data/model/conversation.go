package model

import (
	"database/sql"
	"time"
)

type Conversation struct {
	Id        uint `gorm:"primaryKey;autoIncrement"`
	Hash      string
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt sql.NullTime
}

func (Conversation) TableName() string {
	return "conversation"
}
