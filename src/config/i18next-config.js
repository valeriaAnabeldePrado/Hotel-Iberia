import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';


i18next.use(initReactI18next).init({
    lng: 'es',
    fallbackLng: 'es',
    resources: {
        es: {
            translation: {
                "subTitleHero": "Vive una experiencia única en nuestro hotel. Descubre la esencia detrás de cada rincón.",
                "btn": "Contáctanos",
                "iconHorarios": "Ingreso: 12hs.  Salida: 10hs.",
                "iconLugar":"Ubicado en el centro de la ciudad.",
                "iconHuesped":"De 1 a 6 huéspedes por habitación.",
                "btnVer":"ver más",
                "contactoParrafo":"Estamos a disposición para responder todas tus consultas.",
                nav:{
                 "home":"Home",
                 "HabitacionesyS":"Habitaciones & Servicios",
                 "contacto":"Contacto"
                },
                home:{
                    "titlePI":"Hotel tradicional con amplia trayectoria ubicado en el centro de la ciudad de Neuquén",
                    "parrafoI":"En el Hotel Iberia ofrecemos a los huéspedes, un espacio de descanso, confort y excelente nivel de servicio. Ubicado en pleno centro de la Ciudad de Neuquén, a 200 metros de la Ruta Nacional N° 22, posicionan al Hotel de manera muy conveniente para aquellos que precisan realizar viajes de placer o negocios a la ciudad. Ofrecemos un servicio personalizado con la calidez de un hotel familiar. Más de 50 años esforzándonos para que su estadía sea de real placer.",
                    "cardTitle":"Habitaciones",
                    "cardHomeI":"Habitación simple",
                    "cardHomeII":"Habitación doble",
                    "cardHomeIII":"Habitación triple",
                    "cardHomeIV":"Habitación cuádruple",
                    "cardHomeV":"Habitación quíntuple",
                    "cardHomeVI":"Habitación séxtuple",
                    "btnVer":"ver más",
                    "titlePII":"AFILIADOS A ISSN, OBRAS SOCIALES Y PREPAGAS",
                    "parrafoII":"El Hotel está ubicado en cercanía a los centros de salud de la ciudad, a 5 cuadras de Clínica Pasteur, 8 cuadras de Clínica San Lucas y del Hospital Castro Rendón. A 6 cuadras del Policlínico Neuquén y 9 del CEMIC.",
                    "parrafin":"Adheridos a la tarjeta de la mutual MUNDON",
                    "map":"Encuéntranos en Av. Olascoaga 294, Neuquén."
                },
                HabitacionesServ:{
                   "nameHb":"Habitaciones & Servicios",
                   "parrafoHabi":"Hotel Iberia cuenta con 47 habitaciones, totalmente equipadas. Dispone de amplios ambientes que incluyen baño propio, wifi y aire acondicionado. A su vez posee confortables camas que invitan a su descanso. Al hacer click en cada foto, se detallán las tarifas correspondientes a cada tipo de habitación y servicio que se ofrece dentro de nuestro hotel.", 
                   "titleServ": "Servicios",
                   "serviciosParrafoI":"Hotel Iberia busca ofrecer la más grata experiencia para su estadía. Es por eso que, nuestro servicio de hospedaje cuenta con desayuno incluido, además de brindar servicio de bebidas por un costo adicional. Incluimos dentro de nuestro paquete el servicio de comunicación interna en donde cada uno de nuestros huéspedes se podrá comunicar con la recepción para solventar dudas o inconvenientes, como también un sistema de alarma a una hora determinada.",
                   "serviciosParrafoII":"Además el hotel cuenta con un salón de usos múltiples, destinado para eventos y reuniones con una capacidad para 25 personas, sin embargo, su uso requiere de un costo adicional con tarifas preferenciales para nuestros huéspedes. El valor de este servicio varía de acuerdo a la duración del evento o reunión. El servicio de cochera es otro adicional de nuestro paquete, con costo de $1200. La playa de estacionamiento se ubica a 50 mts de nuestra locación, precisamente en Av.Olascaoaga N° 350. Con accesos en calles Perito Moreno y Felix San Martin.",
                   "cardButon":"Reservar",
                },
                formHabitaciones:{
                    "name":"Nombre",
                    "lastName":"Apellido",
                    "number":"Número Telefónico",
                    "mail":"Correo",
                    "in":"Fecha de ingreso (Debe ingresarse)",
                    "on":"Fecha de egreso (Opcional)",
                    "data":"Datos adicionales (Opcional)",
                    "enviarBtn":"Enviar",
                    "parrafoForm":"Recuerde completar todos los campos, a excepción de datos adicionales si no se lo requiere.",
                    "totlemnjSend":"Datos enviados correctamente",
                    "mnsjEnviado":"Gracias por su reserva, en breve nos comunicaremos con usted por mail o vía telefónica para verificar los datos, recuerde revisar su casilla de email Inbox o spam.",
                },
                errorForm:{
                    "nameError":"Recuerde completar con su nombre.",
                    "lastnameError":"Recuerde completar con su apellido.",
                    "numberError":"Ingrese su número telefónico.",
                    "numberErrorII":"Ejemplo: código de área-número, 299-292929",
                    "emailError":"Ingresa correctamente los datos.",
                    "emailErrorData":"ejemplo@dominio.com",
                    "dateinError":"Debe seleccionar una fecha de ingreso."
                },
                derechos:{
                    "footerDA":"© Construido con orgullo y cafeína por Anabel de Prado y Mauro Lobo. Todos los derechos quedan reservados."
                }
            }
        },
        en: {
            translation: {
                "subTitleHero": "Live a unique experience in our hotel. Discover the essence behind each corner.",
                "btn": "contact us",
                "horarios": "Check in: 12hs. Check out: 10hs.",
                "iconLugar":"Located in the center of the city.",
                "iconHuesped":"From 1 to 6 guests per room",
                "contactoParrafo":"We are available to answer all your questions.",
                nav:{
                    "home":"Home",
                    "HabitacionesyS":"Rooms & Services",
                    "contacto":"Contact"
                   },
                home:{
                    "titlePI":"Traditional hotel with extensive experience located in the center of the city of Neuquén",
                    "parrafoI":"At the Hotel Iberia we offer our guests a space to rest, comfort and an excellent level of service. Located in the heart of the City of Neuquén, 200 meters from National Route 22, they position the Hotel in a very convenient way for those who need to make leisure or business trips to the city. We offer a personalized service with the warmth of a family hotel. More than 50 years striving to make your stay a real pleasure.",
                    "cardTitle":"Rooms",
                    "cardHomeI":"Single room",
                    "cardHomeII":"Double room",
                    "cardHomeIII":"Triple room",
                    "cardHomeIV":"Cuadruple room",
                    "cardHomeV":"Quintuple room",
                    "cardHomeVI":"Sextuple room",
                    "btnVer":"show more",
                    "titlePII":"AFFILIATES TO ISSN, SOCIAL WORKS AND PREPAID",
                    "parrafoII":"The Hotel is located close to the health centers of the city, 5 blocks from Clínica Pasteur, 8 blocks from Clínica San Lucas and Hospital Castro Rendón. 6 blocks from the Neuquén Polyclinic and 9 from the CEMIC.",
                    "parrafin":"Adhered to the MUNDON mutual card",
                    "map":"Find us at Av. Olascoaga 294, Neuquén."
                },
                HabitacionesServ:{
                    "nameHb":"Rooms & Services", 
                    "parrafoHabi":"Hotel Iberia has 47 rooms, fully equipped. It has spacious rooms that include its own bathroom, Wi-Fi and air conditioning. It also has comfortable beds that invite you to rest. By clicking on each photo, they are detailed the rates corresponding to each type of room and service offered within our hotel.", 
                    "titleServ": "Services",
                    "serviciosParrafoI":"Hotel Iberia seeks to offer the most pleasant experience for your stay. That is why our lodging service has breakfast included, in addition to providing beverage service for an additional cost. We include within our package the internal communication service where each of our guests can communicate with the reception to solve doubts or inconveniences, as well as an alarm system at a certain time.",
                    "serviciosParrafoII":"In addition, the hotel has a multipurpose room, intended for events and meetings with a capacity for 25 people, however its use requires an additional cost with preferential rates for our guests. The value of this service varies according to the duration of the event or meeting. The garage service is another additional part of our package, with a cost of $1,200. The parking lot is located 50 meters from our location, precisely at Av.Olascaoaga No. 350. With access from Perito Moreno and Felix San Martin streets.",
                    "cardButon":"Book",
                },
                formHabitaciones:{
                    "name":"Name",
                    "lastName":"Surname",
                    "number":"Phone number",
                    "mail":"Email",
                    "in":"Check-in date (Must be entered)",
                    "on":"Check-out date (Optional)",
                    "data":"Additional data (Optional)",
                    "enviarBtn":"Send",
                    "parrafoForm":"Remember to complete all the fields, except for additional data if it is not required.",
                    "totlemnjSend":"Data sent successfully",
                    "mnsjEnviado":"Thank you for your reservation, we will contact you shortly by mail or by phone to verify the data, remember to check your email Inbox or spam box.",
                },
                errorForm:{
                    "nameError":"Remember to fill in your name.",
                    "lastnameError":"Remember to fill in your surname.",
                    "numberError":"Enter your phone number.",
                    "numberErrorII":"Example: area code-number, 299-292929",
                    "emailError":"Enter the data correctly.",
                    "emailErrorData":"example@domain.com",
                    "dateinError":"You must select a date of entry."
                },
                derechos:{
                    "footerDA":"© Built with pride and caffeine by Anabel de Prado y Mauro Lobo. All rights reserved."
                }
            }
        }
    }
})