import GeneralLayout from '../../layouts/general';

import './style.styl';

const TourPage = () => (
  <GeneralLayout
    title="Тур в Иран"
    headerProps={{
      backgroundUrls: ['/static/background_3.jpg'],
      onScrollButtonClick: () => {},
      children: (
        <div className="tourpage__header">
          <h4>Думаешь, куда поехать на майские праздники?</h4>
          <h3>Открой для себя магию Востока!</h3>
          <h2>29 апреля - 11 мая</h2>
          <h1>ТУР В ИРАН</h1>
        </div>
      ),
    }}
  >
    Персия)))
  </GeneralLayout>
);

export default TourPage;
