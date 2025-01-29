Feature: Resolver el test propuesto por la aplicacion

Scenario: Realizar los tests de la aplicacion
    Given Tester desea ingresar al login
    When Tester ingresa "993046" como usuario y "10df2f32286b7120MS00LTY0MDM5OQ==30e0c83e6c29f1c3" como contraseña
    Then Tester resuelve las preguntas con los siguientes datos
        |character|number|
        |🐮|9|
        |🦄|7|
        |🐏|6|
        |🦊|8|
        |🐡|5|
        |🦇|8|
        |🦥|5|
        |🦍|7|
        |🐬|6|
        |🌵|7|
    Then Tester verifica que se lance el mensaje "Felicidades, has terminado la prueba exitosamente"