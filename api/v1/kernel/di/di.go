package di

import (
	Db "check24/lucas/v1/kernel/db"
	Rasa "check24/lucas/v1/kernel/rasa"
)

type Di struct {
	db   *Db.Connection
	rasa *Rasa.Client
}

func New() *Di {
	return &Di{
		Db.NewMysqlConnection(),
		Rasa.New(),
	}
}

func (self *Di) GetDb() *Db.Connection {
	return self.db
}

func (self *Di) GetRasa() *Rasa.Client {
	return self.rasa
}
