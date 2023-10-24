import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'uz',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            uz: {
                translation: {
                    maqolalar: "Maqolalar",
                    IjtimoiyTarmoqlar:"Ijtimoiy tarmoqlar",
                    xabar:"Xabar qoldirish",
                    malevich:"Malevich Consulting asoschilardan biri va 16 yillik SERVIS bo‘yicha mutaxassis",
                    MenHaqimda:"Men haqimda",
                    motivasiya:"Motivasiya bergim keladi ayrim payt",

                }
            },
            en: {
                translation: {
                    maqolalar: "Articles",
                    IjtimoiyTarmoqlar:"Social Networks",
                    xabar:"Leave a message",
                    malevich:"Malevich Consulting is one of the founders and a 16-year SERVICE specialist",
                    MenHaqimda:"About me",
                    motivasiya:"Sometimes I need motivation"
                }
            },
            ru: {
                translation: {
                    maqolalar: "Маколалар",
                    IjtimoiyTarmoqlar:"Иджтимой Тармоклар",
                    xabar:"Оставить сообщение",
                    malevich:"Малевич Консалтинг – один из основателей и специалист по СЕРВИСУ с 16-летним стажем.",
                    MenHaqimda:"Oбо мне",
                    motivasiya:"Иногда мне нужна мотивация"

                }
            },
        }
    });
    


export default i18n;