## Enable API endpoints
```
rasa run --enable-api
```


```
http://localhost:5005/version
```

### Tener una conversación

```
[POST] http://localhost:5005/webhooks/rest/webhook

{
    "sender": "sender_1",
    "message": "aiuda"
}

sender: Conversation id
message: Message for the bot
```