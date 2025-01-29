Feature: Acceder a la aplicacion

Scenario: Realizar el login con datos validos
    Given Tester desea ingresar al login
    When Tester ingresa "993046" como usuario y "10df2f32286b7120MS00LTY0MDM5OQ==30e0c83e6c29f1c3" como contraseña
    Then Tester verifica que puede accer al aplicativo

Scenario: Realizar el login con datos invalidos
    Given Tester desea ingresar al login
    When Tester ingresa "jrivas" como usuario y "123456" como contraseña
    Then Tester verifica que no puede accder al aplicativo