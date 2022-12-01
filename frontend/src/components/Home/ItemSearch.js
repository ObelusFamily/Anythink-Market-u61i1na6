import { useState, useEffect } from "react";
import { connect } from "react-redux"
import agent from "../../agent";
import {
  HOME_PAGE_LOADED
} from "../../constants/actionTypes";

const mapStateToProps = (state) => ({
  ...state.home,
  appName: state?.common?.appName,
  token: state?.common?.token
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload })
});

const ItemSearch = ({ onLoad }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    if (search && search.trim().length > 2) {
      const tab = "all";
      const itemsPromise = async () => await agent.Items.search(search);

      onLoad(
        tab,
        itemsPromise,
        Promise.all([agent.Tags.getAll(), itemsPromise()])
      );
    }
  }, [search, onLoad]);

  return (
    <span className="input-container">
      <input id="search-box"
        value={search}
        placeholder="What is it that you truly desire?"
        type="search"
        onChange={handleSearchChange}
      />
    </span>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemSearch);