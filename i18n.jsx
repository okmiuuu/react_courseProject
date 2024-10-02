import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: 'by',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          iraida: {
            name: "Iraida Shutava",
            biographytext: "Iraida was born in the city of Verkhnyadzvinsk, Vitebsk region. In 1960, she graduated from the Vitebsk Graphic Pedagogical School, in 1969 from the I.E. Repin Leningrad Art Institute, Faculty of Theory and History of Art"
          },
          genadz: {
              name: "Genadz Shutau",
              biographytext: "Gennady Shutov's watercolors are always marked by the author's metaphysical logic of figurative and compositional thinking, as well as a surprisingly clear algorithm for organizing the artistic space. And refined taste, high professionalism and virtuosity of mastering the favorite art material - watercolor. The inherent quality of all the artist's works is the polyphony and philosophical nature of the images, the clear and rather complex architecture of the figurative and visual field. The external simplicity and accessibility, accentuated by the realistic images in his works, is deceptive. Pictorial specificity refers the viewer to intricately constructed concepts of imagery, which give his author's poetry a special appeal and effective polyphony. It is in him that the reason for the constant interest in the work of this artist for several decades is hidden.",
          },
          general: {
            biographyMenu: "Biography",
            worksMenu: "Works",
            exhibitionsMenu: "Exhibitions",
            contactWithUs: "Contact with us:",
            toSortBy: "To sort by...",
            nameOfTheWork: "name",
            yearOfTheWork: "year",
            leaveOnlyToSale: "Leave only works for sale",
            notForSale: "Not for sale",
            mainExhibitions: "Main exhibitions:"
          }
        }
      },
      by: {
        translation: {
          iraida: {
            name: "Іраіда Шутава",
            biographytext: "Нарадзілася ў горадзе Верхнядзвінску Віцебскай вобласці. У 1960 годзе закончыла Віцебскае графічнае педвучылішча, у 1969 годзе Ленінгардскі мастацкі інстытут імя І.Е.Рэпіна, факультэт тэорыі і гісторыі мастацтваў"
          },
          genadz: {
              name: "Генадзь Шутаў",
              biographytext: "Акварэлі Генадзя Шутава заўсёды адрознівае падкрэслена аўтарская метафізічная логіка вобразнага і кампазіцыйнага мыслення, а таксама  на дзіва выразны алгарытм арганізацыі мастацкай прасторы. А яшчэ вытанчаны густ, высокі прафесіяналізм і віртуознасць валодання ўлюбёным мастацкім матэрыялам – акварэллю. Неад’емная якасць усіх твораў мастака – поліфанізм і філасафічнасць вобразаў, выразная і даволі складаная архітэктоніка вобразнага і візуальнага поля. Вонкавая прастата і даступнасць, падкрэслена рэалістычных выяў у яго працах, зманлівая. Выяўленчая канкрэтнасць адсылае гледача да мудрагеліста выбудаваных канцэпцый вобразнасці, якія надаюць яго аўтарскай паэтыцы адмысловую прыцягальнасць і эфектны поліфанізм. Менавіта ў ім схавана прычына не згасаючай цікавасці да творчасці гэтага мастака на працягу вось ужо некалькіх дзесяцігоддзяў."
            },
          general: {
            biographyMenu: "Біяграфія",
            worksMenu: "Работы",
            exhibitionsMenu: "Выставы",
            contactWithUs: "Звяжыцеся з намі:",
            toSortBy: "Сартыраваць па...",
            nameOfTheWork: "назве",
            yearOfTheWork: "году",
            leaveOnlyToSale: "Пакінуць толькі работы для продажу",
            notForSale: "Для продажу недаступная",
            mainExhibitions: "Асноўныя выставы:"
          }
        }
      }
    }
  });

export default i18n;