import React, { useState, useEffect, useCallback, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./JordanNewsPage.css";
import NewsList from "../HomePage/NewsList/NewsList";
import SortingDropdown from "./SortingDropdown";
import moment from "moment";
import LanguageContext from "../../../LanguageContext";

const JordanNewsPage = () => {
  const [startDate, setStartDate] = useState(
    moment()
      .subtract(1, "months")
      .toDate()
  );
  const [endDate, setEndDate] = useState(moment().toDate());
  const [results, setResults] = useState(null);
  const [page, setPage] = useState(1);
  const [pagesNumber, setPagesNumber] = useState(1);
  const [sorting, setSorting] = useState("relevancy");
  const contextlang = useContext(LanguageContext);
  const [lang, setLang] = useState(contextlang);

  const fetchArticles = useCallback(() => {
    fetch(
      `http://localhost:4000/jordan?from=${startDate.toISOString()}&to=${endDate.toISOString()}&page=${page}&sortBy=${sorting}` +
        (lang === "us" ? "&language=en" : `&language=${lang}`)
    )
      .then(response => response.json())
      .then(res => {
        setResults(res);
        setPagesNumber(Math.ceil(res.totalResults / 15));
      });
  }, [startDate, endDate, page, sorting, lang]);

  useEffect(() => {
    setLang(contextlang);
    setPage(1);
  }, [contextlang]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  if (!results) return null;

  return (
    <div className="JordanNewsPage">
      <SortingDropdown
        onSortingChange={sorting => {
          setSorting(sorting);
          setPage(1);
        }}
      />
      <div className="date">
        <div>
          <label>Start date:</label>
          <DatePicker
            selected={startDate}
            onChange={date => {
              setStartDate(date);
              setPage(1);
            }}
            dateFormat="dd-MM-yyyy"
            maxDate={endDate}
            minDate={moment()
              .subtract(1, "months")
              .toDate()}
          />
        </div>
        <div>
          <label>End date:</label>
          <DatePicker
            selected={endDate}
            onChange={date => {
              setEndDate(date);
              setPage(1);
            }}
            dateFormat="dd-MM-yyyy"
            maxDate={new Date()}
            minDate={startDate}
          />
        </div>
      </div>
      {results.totalResults !== 0 ? (
        <NewsList
          articles={results.articles.filter((item, index, self) => {
            return index === self.findIndex(t => t.title === item.title);
          })}
          pagesNumber={pagesNumber}
          onPageChange={setPage}
          currentPage={page}
        />
      ) : (
        <h1>No results</h1>
      )}
    </div>
  );
};
export default JordanNewsPage;
