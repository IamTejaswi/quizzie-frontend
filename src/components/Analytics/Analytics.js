import React from "react";
import styles from "../Analytics/Analytics.module.css";
import data from "../Analytics/data"
import deleteIcon from "../../assets/delete.png"
import EditIcon from "../../assets/edit.png"
import shareIcon from "../../assets/share.png"

const iconMap = {
  "delete.png":deleteIcon,
  "edit.png":EditIcon,
  "share.png":shareIcon
}

export default function Analytics() {
  return (
    <div className={styles.Table}>
      <table>
        <tr>
          <th>S.No</th>
          <th>Quiz Name</th>
          <th>Created on</th>
          <th>Impression</th>
          <th>act </th>
          <th> 2 </th>
        </tr>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row["S.No"]}</td>
              <td>{row["Quiz Name"]}</td>
              <td>{row["Created on"]}</td>
              <td>{row["Impression"]}</td>
              <td>
                {row["actions"].map((icon, i) => (
                  <img
                    key={i}
                    src={iconMap[icon]}
                    alt={`icon-${i}`}
                    style={{ marginRight: "5px", width: '20px', height: '20px' }}

                  />
                ))}
              </td>
              <td>{row["2"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
