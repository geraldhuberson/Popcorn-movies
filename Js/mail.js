  //* Capturar datos del usuario activo
function enviarMail(event, asunto){
event.preventDefault();
let userActive = {
    name: document.getElementById('nombres').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
}

let to = userActive.email; 
// Encabezados de email
let subject = {
    cons : "Consulta a Popcorn Movies",
    sus :"Popcorn Movies: Confirma tu suscripcion",
    recover : "Solicitud de recuperación de contraseña",
    pur : "Información sobre tu compra en Popcorn Movies",
    unsusc: "Anular tu suscripción a Popcorn Movies",
}

let mensj = document.getElementById('msj');


// Plantillas
let consulta = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title>Consulta</title>
    <!-- [if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif] -->
    <style>
        table, td, div, h1, p {font-family: Verdana, sans-serif;}       
        
    </style>
</head>
<body style="margin:0;padding: 0;">
    <table class="container-table" role="presentation" style="width: 100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff" >
        <tr>
            <td align="center" style="padding:o">
                <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #ffffff;border-spacing:0;text-align:left;">
                    <tr>
                        <td align="center" style="padding:30px 0px;"><img width="auto" height="auto" src="/assets/img/Popcorn ico transp.png" alt="logo Popcorn Movies" ></td>
                    </tr>
                    <tr>
                        <td style="padding:40px 35px;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                            <tr>
                                <td style="padding:0;" align="center" >
                                    <p id="msj" style="margin: 0 0 20px 0;font-family: Verdana, sans-serif;">Hola ${userActive.name}, 
                                        gracias por contactar a Popcorn Movies!
                                        Te responderemos a la brevedad.
                                        <br/> <br>
                                        Presiona el botón para confirmar y regresar a Popcorn Movies. <br /><br />
                                        </p>
                                </td>
                                <tr><td style="background-color:#96cae7; padding: 1px; "></td></tr>
                            </tr>
                            <tr>
                                <td align="center" style="padding:60px 0 0 0;">
                                    <a href="" type="button" style="font-family: Verdana, sans-serif;background-color:#96cae7;text-decoration:none; color:#ffffff;padding: 10px; border-radius:20px" >Volver a Popcorn Movies</a>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 40px 0 0 0;">
                                    <p style="font-family: Verdana, sans-serif;font-size: small; text-align:center;margin: 0 0 20px 0; "> Si el botón no funciona, copia esta URL en tu navegador: <a href="#">URL</a> </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 0;">
                                    <p style="font-family: Verdana, sans-serif;font-size: large; font-weight:500; margin: 0 0 20px 0;"> Bienvenido! </p>
                                </td>
                            </tr>

                           </table>
                       </td>
                    </tr>
                    <tr>
                        <td style="background:#96cae7;padding:15px 30px; border-end-start-radius:15px; border-end-end-radius:15px;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border: 0;border-spacing:0;">
                                <tr>
                                    <td style="padding:0;width:50%;" align="left">
                                        <img width="80px" height="auto" style="display:block;border:0;"src="/assets/img/Popcorn ico transp.png" alt="Logo Popcorn Movies" >
                                    </td>
                                    
                                    <td style="padding:0;width:50%;" align="left">
                                        <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                                            <tr>
                                                <td align="center"style="padding:0 0 0 16px;width:38px;">
                                                    <a  href=""><img src="/assets/img/gorjeo.png" alt="Twitter" width="38" style="height:auto;display:block;border:0;" /></a>
                                                </td>
                                                <td align="center" style="padding:0 0 0 10px;width:38px;">
                                                    <a href=""><img src="/assets/img/facebook.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
                                                </td>
                                            </tr>
                                            
                                        </table>
                                        <td style="padding:0;width:50%;" align="rigth">
                                            <a href="#" style="font-family: Verdana, sans-serif;text-decoration:none; color:#d94787 ;font-size:12px;">Unsubscribe</a>
                                        </td>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        
        

    </table>
    
</body>
</html>` ;

let suscribe = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title>Suscribirse</title>
    <!-- [if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif] -->
    <style>
        table, td, div, h1, p {font-family: Verdana, sans-serif;}       
        
    </style>
</head>
<body style="margin:0;padding: 0;">
    <table class="container-table" role="presentation" style="width: 100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff" >
        <tr>
            <td align="center" style="padding:o">
                <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #ffffff;border-spacing:0;text-align:left;">
                    <tr>
                        <td align="center" style="padding:30px 0px;"><img width="auto" height="auto" src="/assets/img/Popcorn ico transp.png" alt="logo Popcorn Movies" ></td>
                    </tr>
                    <tr>
                        <td style="padding:40px 35px;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                            <tr>
                                <td style="padding:0;" align="center" >
                                    <p id="msj" style="margin: 0 0 20px 0;font-family: Verdana, sans-serif;">Hola ${userActive.name}, 
                                        gracias por Suscribirte a Popcorn Movies!
                                        <br/> <br>
                                        Presiona el botón para confirmar y regresar a Popcorn Movies. <br /><br />
                                        </p>
                                </td>
                                <tr><td style="background-color:#96cae7; padding: 1px; "></td></tr>
                            </tr>
                            <tr>
                                <td align="center" style="padding:60px 0 0 0;">
                                    <a href="" type="button" style="font-family: Verdana, sans-serif;background-color:#96cae7;text-decoration:none; color:#ffffff;padding: 10px; border-radius:20px" >Verifica tu cuenta</a>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 40px 0 0 0;">
                                    <p style="font-family: Verdana, sans-serif;font-size: small; text-align:center;margin: 0 0 20px 0; "> Si el botón no funciona, copia esta URL en tu navegador: <a href="#">URL</a> </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 0;">
                                    <p style="font-family: Verdana, sans-serif;font-size: large; font-weight:500; margin: 0 0 20px 0;"> Bienvenido! </p>
                                </td>
                            </tr>

                           </table>
                       </td>
                    </tr>
                    <tr>
                        <td style="background:#96cae7;padding:15px 30px; border-end-start-radius:15px; border-end-end-radius:15px;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border: 0;border-spacing:0;">
                                <tr>
                                    <td style="padding:0;width:50%;" align="left">
                                        <img width="80px" height="auto" style="display:block;border:0;"src="/assets/img/Popcorn ico transp.png" alt="Logo Popcorn Movies" >
                                    </td>
                                    
                                    <td style="padding:0;width:50%;" align="left">
                                        <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                                            <tr>
                                                <td align="center"style="padding:0 0 0 16px;width:38px;">
                                                    <a  href=""><img src="/assets/img/gorjeo.png" alt="Twitter" width="38" style="height:auto;display:block;border:0;" /></a>
                                                </td>
                                                <td align="center" style="padding:0 0 0 10px;width:38px;">
                                                    <a href=""><img src="/assets/img/facebook.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
                                                </td>
                                            </tr>
                                            
                                        </table>
                                        <td style="padding:0;width:50%;" align="rigth">
                                            <a href="#" style="font-family: Verdana, sans-serif;text-decoration:none; color:#d94787 ;font-size:12px;">Unsubscribe</a>
                                        </td>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        
        

    </table>
    
</body>
</html>` ;
let recoveryPass = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title>Reestablecer contraseña</title>
    <!-- [if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif] -->
    <style>
        table, td, div, h1, p {font-family: Verdana, sans-serif;}       
        
    </style>
</head>
<body style="margin:0;padding: 0;">
    <table class="container-table" role="presentation" style="width: 100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff" >
        <tr>
            <td align="center" style="padding:o">
                <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #ffffff;border-spacing:0;text-align:left;">
                    <tr>
                        <td align="center" style="padding:30px 0px;"><img width="auto" height="auto" src="/assets/img/Popcorn ico transp.png" alt="logo Popcorn Movies" ></td>
                    </tr>
                    <tr>
                        <td style="padding:40px 35px;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                            <tr>
                                <td style="padding:0;" align="center" >
                                    <p id="msj" style="margin: 0 0 20px 0;font-family: Verdana, sans-serif;">Hola ${userActive.name}, 
                                        gracias por contactar a Popcorn Movies!
                                        <br/> <br>
                                        Presiona el botón para reestablecer tu contraseña y recuperar el acceso a Popcorn Movies. <br /><br />
                                        </p>
                                </td>
                                <tr><td style="background-color:#96cae7; padding: 1px; "></td></tr>
                            </tr>
                            <tr>
                                <td align="center" style="padding:60px 0 0 0;">
                                    <a href="" type="button" style="font-family: Verdana, sans-serif;background-color:#96cae7;text-decoration:none; color:#ffffff;padding: 10px; border-radius:20px" >Reestablecer Password</a>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 40px 0 0 0;">
                                    <p style="font-family: Verdana, sans-serif;font-size: small; text-align:center;margin: 0 0 20px 0; "> Si el botón no funciona, copia esta URL en tu navegador: <a href="#">URL</a> </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 0;">
                                    <p style="font-family: Verdana, sans-serif;font-size: large; font-weight:500; margin: 0 0 20px 0;"> Bienvenido! </p>
                                </td>
                            </tr>

                           </table>
                       </td>
                    </tr>
                    <tr>
                        <td style="background:#96cae7;padding:15px 30px; border-end-start-radius:15px; border-end-end-radius:15px;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border: 0;border-spacing:0;">
                                <tr>
                                    <td style="padding:0;width:50%;" align="left">
                                        <img width="80px" height="auto" style="display:block;border:0;"src="/assets/img/Popcorn ico transp.png" alt="Logo Popcorn Movies" >
                                    </td>
                                    
                                    <td style="padding:0;width:50%;" align="left">
                                        <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                                            <tr>
                                                <td align="center"style="padding:0 0 0 16px;width:38px;">
                                                    <a  href=""><img src="/assets/img/gorjeo.png" alt="Twitter" width="38" style="height:auto;display:block;border:0;" /></a>
                                                </td>
                                                <td align="center" style="padding:0 0 0 10px;width:38px;">
                                                    <a href=""><img src="/assets/img/facebook.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
                                                </td>
                                            </tr>
                                            
                                        </table>
                                        <td style="padding:0;width:50%;" align="rigth">
                                            <a href="#" style="font-family: Verdana, sans-serif;text-decoration:none; color:#d94787 ;font-size:12px;">Unsubscribe</a>
                                        </td>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        
        

    </table>
    
</body>
</html>`;
let purchase = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title>Adquirir Peliculas</title>
    <!-- [if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif] -->
    <style>
        table, td, div, h1, p {font-family: Verdana, sans-serif;}       
        
    </style>
</head>
<body style="margin:0;padding: 0;">
    <table class="container-table" role="presentation" style="width: 100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff" >
        <tr>
            <td align="center" style="padding:o">
                <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #ffffff;border-spacing:0;text-align:left;">
                    <tr>
                        <td align="center" style="padding:30px 0px;"><img width="auto" height="auto" src="/assets/img/Popcorn ico transp.png" alt="logo Popcorn Movies" ></td>
                    </tr>
                    <tr>
                        <td style="padding:40px 35px;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                            <tr>
                                <td style="padding:0;" align="center" >
                                    <p id="msj" style="margin: 0 0 20px 0;font-family: Verdana, sans-serif;">Hola ${userActive.name}, 
                                        gracias por adquirir Películas de Popcorn Movies!
                                        <br/> <br>
                                        Presiona el botón para confirmar y regresar a Popcorn Movies. <br /><br />
                                        </p>
                                </td>
                                <tr><td style="background-color:#96cae7; padding: 1px; "></td></tr>
                            </tr>
                            <tr>
                                <td align="center" style="padding:60px 0 0 0;">
                                    <a href="" type="button" style="font-family: Verdana, sans-serif;background-color:#96cae7;text-decoration:none; color:#ffffff;padding: 10px; border-radius:20px" >Reestablecer Password</a>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 40px 0 0 0;">
                                    <p style="font-family: Verdana, sans-serif;font-size: small; text-align:center;margin: 0 0 20px 0; "> Si el botón no funciona, copia esta URL en tu navegador: <a href="#">URL</a> </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 0;">
                                    <p style="font-family: Verdana, sans-serif;font-size: large; font-weight:500; margin: 0 0 20px 0;"> Bienvenido! </p>
                                </td>
                            </tr>

                           </table>
                       </td>
                    </tr>
                    <tr>
                        <td style="background:#96cae7;padding:15px 30px; border-end-start-radius:15px; border-end-end-radius:15px;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border: 0;border-spacing:0;">
                                <tr>
                                    <td style="padding:0;width:50%;" align="left">
                                        <img width="80px" height="auto" style="display:block;border:0;"src="/assets/img/Popcorn ico transp.png" alt="Logo Popcorn Movies" >
                                    </td>
                                    
                                    <td style="padding:0;width:50%;" align="left">
                                        <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                                            <tr>
                                                <td align="center"style="padding:0 0 0 16px;width:38px;">
                                                    <a  href=""><img src="/assets/img/gorjeo.png" alt="Twitter" width="38" style="height:auto;display:block;border:0;" /></a>
                                                </td>
                                                <td align="center" style="padding:0 0 0 10px;width:38px;">
                                                    <a href=""><img src="/assets/img/facebook.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
                                                </td>
                                            </tr>
                                            
                                        </table>
                                        <td style="padding:0;width:50%;" align="rigth">
                                            <a href="#" style="font-family: Verdana, sans-serif;text-decoration:none; color:#d94787 ;font-size:12px;">Unsubscribe</a>
                                        </td>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        
        

    </table>
    
</body>
</html>`;
let unsuscrib = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title>Adquirir Peliculas</title>
    <!-- [if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif] -->
    <style>
        table, td, div, h1, p {font-family: Verdana, sans-serif;}       
        
    </style>
</head>
<body style="margin:0;padding: 0;">
    <table class="container-table" role="presentation" style="width: 100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff" >
        <tr>
            <td align="center" style="padding:o">
                <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #ffffff;border-spacing:0;text-align:left;">
                    <tr>
                        <td align="center" style="padding:30px 0px;"><img width="auto" height="auto" src="/assets/img/Popcorn ico transp.png" alt="logo Popcorn Movies" ></td>
                    </tr>
                    <tr>
                        <td style="padding:40px 35px;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                            <tr>
                                <td style="padding:0;" align="center" >
                                    <p id="msj" style="margin: 0 0 20px 0;font-family: Verdana, sans-serif;">Hola ${userActive.name}, 
                                        lamentamos que abandones Popcorn Movies!
                                        <br/> <br>
                                        Presiona el botón para cancelar tu suscripción. <br /><br />
                                        </p>
                                </td>
                                <tr><td style="background-color:#96cae7; padding: 1px; "></td></tr>
                            </tr>
                            <tr>
                                <td align="center" style="padding:60px 0 0 0;">
                                    <a href="" type="button" style="font-family: Verdana, sans-serif;background-color:#96cae7;text-decoration:none; color:#ffffff;padding: 10px; border-radius:20px" >Reestablecer Password</a>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 40px 0 0 0;">
                                    <p style="font-family: Verdana, sans-serif;font-size: small; text-align:center;margin: 0 0 20px 0; "> Si el botón no funciona, copia esta URL en tu navegador: <a href="#">URL</a> </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 0;">
                                    <p style="font-family: Verdana, sans-serif;font-size: large; font-weight:500; margin: 0 0 20px 0;"> Te esperamos nuevamente! </p>
                                </td>
                            </tr>

                           </table>
                       </td>
                    </tr>
                    <tr>
                        <td style="background:#96cae7;padding:15px 30px; border-end-start-radius:15px; border-end-end-radius:15px;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border: 0;border-spacing:0;">
                                <tr>
                                    <td style="padding:0;width:50%;" align="left">
                                        <img width="80px" height="auto" style="display:block;border:0;"src="/assets/img/Popcorn ico transp.png" alt="Logo Popcorn Movies" >
                                    </td>
                                    
                                    <td style="padding:0;width:50%;" align="left">
                                        <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                                            <tr>
                                                <td align="center"style="padding:0 0 0 16px;width:38px;">
                                                    <a  href=""><img src="/assets/img/gorjeo.png" alt="Twitter" width="38" style="height:auto;display:block;border:0;" /></a>
                                                </td>
                                                <td align="center" style="padding:0 0 0 10px;width:38px;">
                                                    <a href=""><img src="/assets/img/facebook.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
                                                </td>
                                            </tr>
                                            
                                        </table>
                                        <td style="padding:0;width:50%;" align="rigth">
                                            <a href="#" style="font-family: Verdana, sans-serif;text-decoration:none; color:#d94787 ;font-size:12px;">Unsubscribe</a>
                                        </td>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        
        

    </table>
    
</body>
</html>`;

let cuerpo_mail;
let asuntoMail;
switch (asunto) {  
    case "cons": 
        asuntoMail=`${subject.cons}`;  
        mensj.innerHTML=`Hola ${userActive.name}, 
        gracias por contactar a Popcorn Movies!
        <br/> <br>
        Presiona el botón para reestablecer tu contraseña y recuperar el acceso a Popcorn Movies. <br /><br />`;
        cuerpo_mail= mensj;
        // cuerpo_mail= consulta;
    break;
    case "sus":
        asuntoMail=`${subject.sus}`;
        cuerpo_mail= suscribe;
    break;
    case "recover":
        asuntoMail=`${subject.recover}`;        
        cuerpo_mail= recoveryPass;
    break;
    case "pur":
        asuntoMail=`${subject.pur}`;
        cuerpo_mail= purchase;
    break;
    case "unsusc": 
        asuntoMail=`${subject.unsusc}`;        
        cuerpo_mail= unsuscrib;
    break;
}



//! necesitamos llamar a esta funcion en cada instancia que se debe enviar el email, 
//!junto con el subject y la plantilla
function mail(){

    Email.send({
     Host : "smtp.elasticemail.com",
     Username : "ad.popcorn.movies@gmail.com",
     Password : "016C840DF53B1529A907F674124713FAD384",
     To : "ad.popcorn.movies@gmail.com",
     From : "ad.popcorn.movies@gmail.com",
     Subject : asuntoMail,
     Body : `${cuerpo_mail}, Comentario: ${userActive.message}`
 }).then(
   message => console.log(message)
      );
    }
 
    mail(); 
}







    
