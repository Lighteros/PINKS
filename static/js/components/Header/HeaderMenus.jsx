import styles from "./HeaderMenus.module.css";
function HeaderMenus({ menus,activeSection, itemOnClick }) {
  const boxClasses = [styles["menu-box"]];
  return (
    <div className={boxClasses.join(" ")}>
      {menus.map((item) => (
        <div
          key={item.name}
          className={`${styles.menu} ${
            activeSection === item.name ? styles.active : ""
          }`}
          onClick={() => itemOnClick(item.ref)}
        >
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </div>
      ))}
    </div>
  );
}

export default HeaderMenus;
