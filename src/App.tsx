import {
  Pagination,
  SearchBar,
  VerticalResults,
  StandardFacets,
} from "@yext/answers-react-components";
import { BeverageCard } from "./components/cards/BeverageCard";

function App() {
  return (
    <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-5xl">
        <SearchBar />
        <div className="flex">
          <StandardFacets />
          <VerticalResults
            customCssClasses={{
              results: "grid md:grid-cols-2 lg:grid-cols-4 gap-4 grid-cols-1",
            }}
            CardComponent={BeverageCard}
            allowPagination={false}
          />
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default App;
