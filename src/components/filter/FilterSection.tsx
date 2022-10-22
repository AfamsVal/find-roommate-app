import { useState } from "react";
import { motion } from "framer-motion";
import { PRICE, UNIVERSITIES } from "../../utils/state";
import { formatCurrency } from "../../utils/formValidator";
import useToast from "../../hooks/toast/useToast";
import {
  getAllListing,
  searchRoomListing,
} from "../../context/actions/roomsAction";
import { useAppSelector } from "../../context/GlobalState";
import { useLocation } from "react-router-dom";

const FilterSection = () => {
  const [openNotification] = useToast();
  // const [search, setSearch] = useState<string>("");
  const [university, setUniversity] = useState<string>("");
  const [minAmount, setMinAmount] = useState<string>("");
  const [maxAmount, setMaxAmount] = useState<string>("");
  // const [loadingSearch, setLoadingSearch] = useState<boolean>(false);
  // const [searchedData, setSearchData] = useState<ISearch[]>([]);

  const { dispatch, listing } = useAppSelector();

  const { searching } = listing;

  const { pathname } = useLocation();

  // const debounceValue = useDebounce(search, 500);

  // useMemo(() => {
  //   if (debounceValue) {
  //     !searchedData.length && setLoadingSearch(true);
  //     checkSearchDetails(debounceValue).then((res: any) => {
  //       console.log("searching", res);
  //       if (debounceValue && res.length) {
  //         setLoadingSearch(false);
  //         setSearchData(res);
  //       }
  //       if (debounceValue && res.length === 0) {
  //         setSearchData([]);
  //         // Error("No result Found!");
  //         setLoadingSearch(false);
  //       }
  //     });
  //   }

  //   if (!debounceValue) {
  //     console.log("alternative...");
  //     setSearchData([]);
  //     setLoadingSearch(false);
  //   }
  // }, [debounceValue]);

  const handleFilter = () => {
    if (!university && !maxAmount && !minAmount) {
      openNotification(
        "Invalid Input:",
        "Please select and item to search!",
        "error"
      );
      return false;
    }

    if (Number(minAmount) && Number(maxAmount)) {
      if (Number(minAmount) > Number(maxAmount)) {
        openNotification(
          "Invalid Input:",
          "Minimum amount is greater than maximum amount!",
          "error"
        );
        return false;
      }
    }

    const selectedType =
      pathname === "/find-room"
        ? "room"
        : pathname === "/find-roommate"
        ? "roommate"
        : "all";

    const filtered = {
      university,
      min: Number(minAmount) || 0,
      max: Number(maxAmount) || 0,
      selectedType,
      start: 0,
      limit: 50,
    };

    searchRoomListing(dispatch, filtered);
  };

  return (
    <div
      className="col-12 col-md-8 mx-auto mb-5 form-group"
      style={{ position: "relative" }}
    >
      <div className="row mb-3">
        <div className="col-6 d-flex flex-column flex-lg-row flex-1 mx-auto w-100">
          <div className="form-group mx-2 flex-2 form-select p-0 mb-2">
            <select
              className="form-control text-center outline-none"
              style={{ paddingBlock: "10px" }}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setMinAmount(e.target.value)
              }
              value={minAmount}
            >
              <option value="">-- Min Amount --</option>
              {PRICE.map((amount: number, i: number) => (
                <option key={i} value={amount}>
                  ₦{formatCurrency(amount + "")}.00
                </option>
              ))}
            </select>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="form-group mx-2 flex-2 form-select p-0 mb-2">
            <select
              className="form-control text-center outline-none"
              style={{ paddingBlock: "10px" }}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setMaxAmount(e.target.value)
              }
              value={maxAmount}
            >
              <option value="">-- Max Amount --</option>
              {PRICE.map((amount: number, i: number) => (
                <option key={i} value={amount}>
                  ₦{formatCurrency(amount + "")}.00
                </option>
              ))}
            </select>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
        <div className="col-6 d-flex flex-column flex-lg-row flex-1 mx-auto w-100">
          <div className="form-group mx-2 form-select flex-1 p-0 mb-2">
            <select
              className="form-control text-center outline-none"
              style={{ paddingBlock: "10px" }}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setUniversity(e.target.value)
              }
              value={university}
            >
              <option value="">-- Select University --</option>
              {UNIVERSITIES.map((uni: string, i: number) => (
                <option key={i} value={uni}>
                  {uni}
                </option>
              ))}
            </select>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="form-group mx-2 mb-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={handleFilter}
              className="custom-button text-center d-block mx-auto"
            >
              <i className="fas fa-search"></i> Search Now{" "}
              {searching && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-center ">
          <motion.div
            animate={{ scale: 1.1 }}
            transition={{ yoyo: Infinity, duration: 1 }}
            className="font-bold cursor-pointer text-base inline text-secondary"
            onClick={() => getAllListing(dispatch, { start: 0, limit: 30 })}
          >
            <i className="fas fa-sync-alt"></i> Reset All
          </motion.div>
        </div>
      </div>

      {/* <div className="row">
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: [50, 0, 10, 0], opacity: 1 }}
          transition={{
            type: "tween",
            duration: 2,
            delay: 1,
          }}
          className="col-12 col-md-9 mx-auto box-shadow-2 px-0"
        >
          <input
            type="text"
            className="form-control text-center py-2 outline-none listing"
            placeholder="Type & Search Room By Title..."
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
        </motion.div>
      </div> */}
    </div>
  );
};

export default FilterSection;
