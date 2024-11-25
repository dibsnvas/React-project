import React from "react";
import "./App.css";

const CyberPage = () => {
  return (
    <div className="bg-cover bg-center min-h-screen text-white overflow-hidden">
      <header className="text-center bg-opacity-70 bg-blue-900 flex items-center space-x-4 h-[80px] w-screen">
        <img
          src="/image.png"
          alt="Cyber Zhauynger Logo"
          className="h-16 w-16 ml-4"
        />
<h1 className="text-1xl sm:text-3xl md:text-4xl lg:text-3xl font-bold font-custom-font text-white">
  Cyber Zhauynger.kz
</h1>

      </header>

      <div className="bg-blue-900 bg-opacity-70 shadow-lg rounded-lg p-6 mb-8 text-center mt-24">
        <h2 className="text-4xl font-semibold mb-4 font-custom-font text-white">
          Кибер-Жауынгер
        </h2>
        <p className="font-custom-font text-2xl text-white">прикладная школа инженерии</p>
        <div className="h-48 bg-gray-300 mt-6 flex items-center justify-center">
          <span className="font-custom-font text-gray-500">Видео на заднем фоне</span>
        </div>
      </div>

      <section className="relative flex items-center justify-center mt-[54px] mb-8">
  <h3 className="absolute text-5xl font-custom-font font-semibold top-[-2rem] text-white">
    Выберите интересующее вас направление:
  </h3>
  <div className="circular-pyramid">
    <button className="pyramid-item font-custom-font text-3xl sm:text-xl md:text-2xl">
      Ракетостроение
    </button>
    <button className="pyramid-item font-custom-font text-lg sm:text-xl md:text-2xl">
      Робототехника
    </button>
    <button className="pyramid-item font-custom-font text-lg sm:text-xl md:text-2xl">
      3D печать
    </button>
    <button className="pyramid-item font-custom-font text-lg sm:text-xl md:text-2xl">
      3D моделирование
    </button>
    <button className="pyramid-item font-custom-font text-lg sm:text-xl md:text-2xl">
      Разработка приложений
    </button>
  </div>
</section>



      <section className="bg-blue-900 bg-opacity-70 shadow-lg rounded-lg p-6 mb-8">
        <h3 className=" font-custom-font text-xl font-semibold mb-4 text-white">
          Миссия школы:
        </h3>
        <p className="text-white font-custom-font">
          Школа «Кибер Жауынгер» — это воплощение детской мечты, вдохновлённой
          образом Тони Старка, гениального изобретателя и защитника. Увлечение
          его деятельностью побудило меня изучать науку и IT, а трёхлетний опыт
          работы в образовании и ведение онлайн-школы по олимпиадной физике
          привели к созданию места, где готовят будущих «Железных людей».
          Наблюдая ежедневные новости из горячих точек планеты, где
          политические конфликты между странами всё чаще сопровождаются
          использованием передовых технологий, мы видим, как дроны, умные
          системы, ракеты и другие инновации становятся решающим фактором. Это
          подчеркивает важность подготовки инженеров и IT-специалистов,
          которые играют ключевую роль в обеспечении безопасности и развитии
          страны. Мы не только обучаем этим направлениям, но и помогаем
          ученикам освоить навыки заработка в этих сферах. На курсе по GameDev
          мы учим загружать созданные игры на платформы, такие как Play Market
          и App Store. На курсе по 3D-моделированию показываем, как размещать
          модели на платных платформах для продажи в видеоиграх. А на курсе по
          3D-печати обучаем создавать изделия, которые можно продавать в
          качестве пластиковых товаров.и т.д. Как и Тони Старк, применявший свои
          изобретения для защиты, мы вдохновляем учеников создавать технологии,
          которые служат миру и обществу. Наша миссия — подготовить поколение
          инженеров и разработчиков, способных строить мирное и безопасное
          будущее.
        </p>
      </section>

      <footer className="bg-blue-900 bg-opacity-70 shadow-lg rounded-lg p-6 text-center">
        <p className="text-white font-custom-font">Адрес: Аль-Фараби, 21/7</p>
        <p className="text-white font-custom-font">
          Контактные данные: 8 778 873 96 17 (whatsapp)
        </p>
      </footer>
    </div>
  );
};

export default CyberPage;
