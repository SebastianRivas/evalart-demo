Feature: Resolver las preguntas propuestas por la aplicacion

    Scenario: Realizar el test de la aplicacion
        Given Tester desea ingresar al login
        When Tester ingresa "1051914" como usuario y "10df2f32286b7120Mi00LTQxOTE1MDE=30e0c83e6c29f1c3" como contraseña
        Then Tester resuelve las preguntas con los siguientes datos
            | character | number |
            | 🐮        | 9      |
            | 🦄        | 7      |
            | 🐏        | 6      |
            | 🦊        | 8      |
            | 🐡        | 5      |
            | 🦇        | 8      |
            | 🦥        | 5      |
            | 🦍        | 7      |
            | 🐬        | 6      |
            | 🌵        | 7      |
        Then Tester verifica que se lance el mensaje "Felicidades, has terminado la prueba exitosamente"