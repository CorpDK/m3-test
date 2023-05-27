import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SideSheets from "./pages/SideSheets";
import TextFields from "./pages/TextFields";
import Tabs from "./pages/Tabs";
import Switch from "./pages/Switch";
import TopAppBars from "./pages/TopAppBars";
import SegmentedButtons from "./pages/SegmentedButtons";
import Search from "./pages/Search";
import ProgressIndicators from "./pages/ProgressIndicators";
import Sliders from "./pages/Sliders";
import RadioButtons from "./pages/RadioButtons";
import NavigationDrawer from "./pages/NavigationDrawer";
import NavigationRails from "./pages/NavigationRails";
import Menu from "./pages/Menu";
import Lists from "./pages/Lists";
import Dividers from "./pages/Dividers";
import IconButtons from "./pages/IconButtons";
import NavigationBars from "./pages/NavigationBars";
import FABs from "./pages/FABs";
import Chips from "./pages/Chips";
import Buttons from "./pages/Buttons";
import Tooltips from "./pages/Tooltips";
import Snackbars from "./pages/Snackbars";
import TimePicker from "./pages/TimePicker";
import Carousel from "./pages/Carousel";
import TableOfContents from "./pages/TableOfContents";
import Cards from "./pages/Cards";
import DatePicker from "./pages/DatePicker";
import BottomSheets from "./pages/BottomSheets";
import Checkboxes from "./pages/Checkboxes";
import Badges from "./pages/Badges";
import BottomAppBars from "./pages/BottomAppBars";
import Dialogs from "./pages/Dialogs";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/text-fields":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/tabs":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/switch":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/top-app-bars":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/segmented-buttons":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/search":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/progress-indicators":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/sliders":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/radio-buttons":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/navigation-drawer":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/navigation-rails":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/menu":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/lists":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/dividers":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/icon-buttons":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/navigation-bars":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/fabs":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/chips":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/buttons":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/tooltips":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/snackbars":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/time-picker":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/carousel":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/table-of-contents":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/cards":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/date-picker":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/bottom-sheets":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/checkboxes":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/badges":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/bottom-app-bars":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/dialogs":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);

  return (
    <Routes>
      <Route path="/side-sheets" element={<SideSheets />} />
      <Route path="/text-fields" element={<TextFields />} />
      <Route path="/tabs" element={<Tabs />} />
      <Route path="/switch" element={<Switch />} />
      <Route path="/top-app-bars" element={<TopAppBars />} />
      <Route path="/segmented-buttons" element={<SegmentedButtons />} />
      <Route path="/search" element={<Search />} />
      <Route path="/progress-indicators" element={<ProgressIndicators />} />
      <Route path="/sliders" element={<Sliders />} />
      <Route path="/radio-buttons" element={<RadioButtons />} />
      <Route path="/navigation-drawer" element={<NavigationDrawer />} />
      <Route path="/navigation-rails" element={<NavigationRails />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/lists" element={<Lists />} />
      <Route path="/dividers" element={<Dividers />} />
      <Route path="/icon-buttons" element={<IconButtons />} />
      <Route path="/navigation-bars" element={<NavigationBars />} />
      <Route path="/fabs" element={<FABs />} />
      <Route path="/chips" element={<Chips />} />
      <Route path="/buttons" element={<Buttons />} />
      <Route path="/tooltips" element={<Tooltips />} />
      <Route path="/snackbars" element={<Snackbars />} />
      <Route path="/time-picker" element={<TimePicker />} />
      <Route path="/carousel" element={<Carousel />} />
      <Route path="/" element={<TableOfContents />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/date-picker" element={<DatePicker />} />
      <Route path="/bottom-sheets" element={<BottomSheets />} />
      <Route path="/checkboxes" element={<Checkboxes />} />
      <Route path="/badges" element={<Badges />} />
      <Route path="/bottom-app-bars" element={<BottomAppBars />} />
      <Route path="/dialogs" element={<Dialogs />} />
    </Routes>
  );
}
export default App;
