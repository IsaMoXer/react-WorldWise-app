import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
//import PropTypes from "prop-types";
import CountryItem from "./CountryItem";
//import { useCities } from "../contexts/CitiesContext";
import useCities from "../contexts/useCities";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map(el => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  /* const countries = cities.reduce((arr, city) => {
    if (!arr.some(item => item.country === city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    }
    return arr;
  }, []); */

  return (
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

/* CountryList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
 */
export default CountryList;
