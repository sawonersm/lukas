import {Interlocutor} from "@/business/enum/interlocutor.enum"

export type ConversationConfigurationMessageType = {
    interlocutor: Interlocutor
    message: string
}


export type ConversationConfigurationType = {
    id: string
    menu: string
    title: string
    messages: ConversationConfigurationMessageType[]
}

const Conversations: ConversationConfigurationType[] = [
    {
        id: "conversation-greetings",
        menu: "Saludos!",
        title: "Saludos!",
        messages: [
            {
                interlocutor: Interlocutor.USER,
                message: "Buenas tardes!"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "Hola! ¿En qué puedo ayudarte?"
            }
        ]
    },
    {
        id: "conversation-need-insurance",
        menu: "Necesito un seguro",
        title: "Necesito un seguro",
        messages: [
            {
                interlocutor: Interlocutor.USER,
                message: "Necesitaría un seguro"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "¿Qué tipo de seguro?"
            },
            {
                interlocutor: Interlocutor.USER,
                message: "Necesitaría uno de coche"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "Mira aquí: <web>"
            }
        ]
    },
    {
        id: "conversation-call-me-back",
        menu: "¿Podéis llamarme?",
        title: "¿Podéis llamarme?",
        messages: [
            {
                interlocutor: Interlocutor.USER,
                message: "¿Me podéis llamar?"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "¿Cuál es tu nombre?"
            },
            {
                interlocutor: Interlocutor.USER,
                message: "Me llamo Jesús"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "¿Cuál es tu número de teléfono?"
            },
            {
                interlocutor: Interlocutor.USER,
                message: "675433441"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "Jesús, pronto te llamaremos al teléfono: 675433441"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "¿Puedo ayudarte en algo más?"
            }
        ]
    },
    {
        id: "conversation-car-not-found-affirm",
        menu: "No encuentro mi coche (Llámame)",
        title: "No encuentro mi coche (Llamada aceptada)",
        messages: [
            {
                interlocutor: Interlocutor.USER,
                message: "No encuentro la version de mi coche"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "¿Deseas que un agente te llame para poder continuar?"
            },
            {
                interlocutor: Interlocutor.USER,
                message: "Claro!"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "¿Cuál es tu nombre?"
            },
            {
                interlocutor: Interlocutor.USER,
                message: "Me llamo Jesús"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "¿Cuál es tu número de teléfono?"
            },
            {
                interlocutor: Interlocutor.USER,
                message: "675433441"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "Jesús, pronto te llamaremos al teléfono: 675433441"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "¿Puedo ayudarte en algo más?"
            }
        ]
    },
    {
        id: "conversation-car-not-found-deny",
        menu: "No encuentro mi coche (No llames)",
        title: "No encuentro mi coche (Llamada denegada)",
        messages: [
            {
                interlocutor: Interlocutor.USER,
                message: "No encuentro la version de mi coche"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "¿Deseas que un agente te llame para poder continuar?"
            },
            {
                interlocutor: Interlocutor.USER,
                message: "mmm... no"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "Qué lástima! Estamos 24h para tí si nos necesitas"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "¿Puedo ayudarte en algo más?"
            },
        ]
    },
    {
        id: "conversation-cancel-after-booking",
        menu: "Anular tras contratar",
        title: "Anular tras contratar",
        messages: [
            {
                interlocutor: Interlocutor.USER,
                message: "¿Podria cancelar mi seguro despues de haberlo contratado?"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "Tienes 14 dias desde la contratacion para anular la contratación de cualquiera de nuestros seguros, para ello solo debes ponerte en contacto con nosotros en el numero 916174432, o en el mail <email>"
            }
        ]
    },
    {
        id: "conversation-cancel-insurance",
        menu: "Cancelar seguro",
        title: "Cancelar seguro",
        messages: [
            {
                interlocutor: Interlocutor.USER,
                message: "Quiero cancelar mi seguro"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "La ley del contrato de seguros indica que la no renovación de una poliza debe notificarse a la compañía aseguradora con un minimo de un mes de antelación al vencimiento pero si es una nueva contratación podrás notificar la anulación el los siguientes 14 dias naturales"
            }
        ]
    },
    {
        id: "conversation-is-insurance-mandatory",
        menu: "¿Es obligatorio?",
        title: "¿Es obligatorio?",
        messages: [
            {
                interlocutor: Interlocutor.USER,
                message: "¿Es obligatorio contratar un seguro?"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "La ley obliga a que todo vehículo a motor tenga como minimo contratado un seguro de responsabilidad civil"
            }
        ]
    },
    {
        id: "conversation-needed-documentation",
        menu: "Documentación necesaria",
        title: "Documentación necesaria",
        messages: [
            {
                interlocutor: Interlocutor.USER,
                message: "¿Què documentacion necesito para comparar mi seguro de coche?"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "Los datos exactos del vehículo, de los conductores y del seguro anterior en caso de que lo haya. Puedes realizar la comparacion en <email>"
            }
        ]
    },
    {
        id: "conversation-what-is-mandatory-civil-liability",
        menu: "Qué es responsabilidad civil obligatoria",
        title: "Qué es responsabilidad civil obligatoria",
        messages: [
            {
                interlocutor: Interlocutor.USER,
                message: "¿Qué es responsabilidad civil obligatoria?"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "Cubre los daños ocasionados a terceros"
            }
        ]
    },
    {
        id: "conversation-favourite-pokemon",
        menu: "Pokemon favorito",
        title: "Pokemon favorito",
        messages: [
            {
                interlocutor: Interlocutor.USER,
                message: "¿Cual es tu pokemon favorito?"
            },
            {
                interlocutor: Interlocutor.BOT,
                message: "Dude ... Gardevoir is awesome!"
            }
        ]
    }
]

export default Conversations
