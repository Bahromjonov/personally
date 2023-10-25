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
                    IjtimoiyTarmoqlar: "Ijtimoiy tarmoqlar",
                    xabar: "Xabar qoldirish",
                    malevich: "Malevich Consulting asoschilardan biri va 16 yillik SERVIS bo‘yicha mutaxassis",
                    MenHaqimda: "Men haqimda",
                    motivasiya: "Motivasiya bergim keladi ayrim payt",
                    Lekin: "Lekin men etib bergan hikoyalar ko‘pincha tasirli bo‘lmaydi, negadir. Hikoya so‘zlash ham bir san’at ekan.",
                    Lekinn: "Lekin men etib bergan hikoyalar ko‘pincha tasirli bo‘lmaydi, negadir. Hikoya so‘zlash ham bir san’at ekan.",
                    BoyOta: "Boy-otaning xayotidan.",
                    Qiyin: "Qiyin bo‘lsa ham, bir nechta odam non topyapdi. Yana bir yil guv etib o‘tib ketdi.",
                    MashhurMaqolalar: "Mashhur maqolalar",
                    BoyotaningXayotidan: "Boy-otaning xayotidan...",
                    velosipedMinibTugilmagan: "Hech kim velosiped minib tug‘ilmagan.",
                    TalabalikDavridaIshlashYomonmi:"Talabalik davrida ishlash yomonmi?",
                    KuchliResursingiz:"Sizda qaysi kuchli resursingiz bor?",
                    vaziyatlar:"Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…",
                    PsixologningSuhbati:"Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul qilish kerak emas ekan…",
                    fikirlar:"Alisher Rustamovga o‘z fikrlaringiz, munosabatlaringizni bildirish imkoniyatingiz bor!",
                    yuborish:"Yuborish"
                }
            },
            en: {
                translation: {
                    maqolalar: "Articles",
                    IjtimoiyTarmoqlar: "Social Networks",
                    xabar: "Leave a message",
                    malevich: "Malevich Consulting is one of the founders and a 16-year SERVICE specialist",
                    MenHaqimda: "About me",
                    motivasiya: "Sometimes I need motivation",
                    Lekin: "But the stories I tell are often not effective, for some reason. Storytelling is also an art",
                    Lekinn: "But the stories I tell are often not effective, for some reason. Storytelling is also an art",
                    BoyOta: "From the Life of the Rich Father.",
                    Qiyin: "Although it is difficult, several people are earning bread. Another year has passed.",
                    MashhurMaqolalar: "Popular articles",
                    BoyotaningXayotidan: "From the life of a rich man...",
                    velosipedMinibTugilmagan: "Working as a student is it bad",
                    TalabalikDavridaIshlashYomonmi:"Working as a student is it bad",
                    KuchliResursingiz:"Is working as a student bad?",
                    vaziyatlar:"There are situations in life when you don't ask anyone for help...",
                    PsixologningSuhbati:"Recently I heard a conversation of a psychologist. He said that no important financial decisions should be made at that time...",
                    fikirlar:"You have the opportunity to express your thoughts and relationships to Alisher Rustamov! You have the opportunity to express your thoughts and relationships to Alisher Rustamov!",
                    yuborish:"To send"
                }
            },
            ru: {
                translation: {
                    maqolalar: "Маколалар",
                    IjtimoiyTarmoqlar: "Иджтимой Тармоклар",
                    xabar: "Оставить сообщение",
                    malevich: "Малевич Консалтинг – один из основателей и специалист по СЕРВИСУ с 16-летним стажем.",
                    MenHaqimda: "Oбо мне",
                    motivasiya: "Иногда мне нужна мотивация",
                    Lekin: "Но истории, которые я рассказываю, по каким-то причинам часто неэффективны. Рассказывание историй — это тоже искусство».",
                    Lekinn: "Но истории, которые я рассказываю, по каким-то причинам часто неэффективны. Рассказывание историй — это тоже искусство».",
                    BoyOta: "Из жизни богатого отца.",
                    Qiyin: "Хоть это и сложно, но несколько человек зарабатывают на хлеб. Прошел еще один год.",
                    MashhurMaqolalar: "Популярные статьи",
                    BoyotaningXayotidan: "Из жизни богатого человека...",
                    velosipedMinibTugilmagan: "Работаю студентом Fэто плохо",
                    TalabalikDavridaIshlashYomonmi:"Работаю студентом это плохо",
                    KuchliResursingiz:"Какой у вас самый сильный ресурс?",
                    vaziyatlar:"Бывают в жизни ситуации, когда ни у кого не просишь помощи...",
                    PsixologningSuhbati:"Недавно услышал разговор психолога. Он заявил, что в это время не следует принимать никаких важных финансовых решений...",
                    fikirlar:"У Вас есть возможность выразить свои мысли и отношения Алишеру Рустамову!У Вас есть возможность выразить свои мысли и отношения Алишеру Рустамову!",
                    yuborish:"Oтправлять"
                }
            },
        }
    });



export default i18n;