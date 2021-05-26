package main

import (
	GinCors "github.com/gin-contrib/cors"
	Gin "github.com/gin-gonic/gin"

	"check24/lucas/v1/kernel/di"

	ConversationController "check24/lucas/v1/controller/conversation"
	MessageController "check24/lucas/v1/controller/message"
)

type Router struct {
}

func main() {
	router := Gin.Default()

	// Custom cors
	// cors := GinCors.New(
	// 	GinCors.Config{
	// 		AllowOrigins:     []string{"https://foo.com"},
	// 		AllowMethods:     []string{"PUT", "PATCH"},
	// 		AllowHeaders:     []string{"Origin"},
	// 		ExposeHeaders:    []string{"Content-Length"},
	// 		AllowCredentials: true,
	// 	},
	// ),

	cors := GinCors.Default()
	router.Use(cors)

	di := di.New()

	ConversationController.Routes(router, di)
	MessageController.Routes(router, di)

	router.Run(":80")
}
