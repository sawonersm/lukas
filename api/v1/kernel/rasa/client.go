package rasa

import (
	"bytes"
	"encoding/json"
	"io/ioutil"
	"net/http"
)

const HOST = "http://rasa-bot:5005"
const ASK_PATH = "webhooks/rest/webhook"

type Client struct {
}

type AskRequest struct {
	Message string `json:"message"`
	Sender  string `json:"sender"`
}

type AskResponse struct {
	Responses []struct {
		RecipientId string `json:"recipient_id"`
		Text        string `json:"text"`
	}
}

func New() *Client {
	return &Client{}
}

func (self *Client) Ask(conversation string, message string) *AskResponse {

	parameters := &AskRequest{
		Message: message,
		Sender:  conversation,
	}

	serialized, _ := json.Marshal(parameters)

	request, _ := http.NewRequest("POST", HOST+"/"+ASK_PATH, bytes.NewBuffer(serialized))
	request.Header.Set("Content-Type", "application/json; charset=UTF-8")
	client := &http.Client{}
	response, err := client.Do(request)
	if err != nil {
		panic(err)
	}
	defer response.Body.Close()
	body, _ := ioutil.ReadAll(response.Body)

	resp := &AskResponse{}
	json.Unmarshal(body, &resp.Responses)
	return resp
}
