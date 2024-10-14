import axios from "axios";
import React, { useState } from "react";

interface Directory {
  name: string;
  subDirs: Directory[];
  files: string[];
}

// export function Opener({ isOpen }) {
//   return <>{isOpen ? "▼" : "▶"}</>;
// }

const Folder = ({ data }: { data: Directory }) => {
  const [urlValue, setUrlvalue]= useState()

  const showContent= async(str)=>{
    const response = await axios.get(`http://localhost:3000/api/get-data?path=${str}`)
    
  }
  return (
    <div style={{ display: "flex", justifyContent:'space-between' ,  marginTop: "30px" }}>
      <div>
        <div >{data.name}</div>

        {data?.subDirs.map((item) => (
          <div style={{ marginLeft: "20px" }}>
            <Node subfolder={item} onClick={showContent}></Node>
          </div>
        ))}

        {data?.files.map((item) => (
          <div style={{ marginLeft: "20px" }} onClick={()=>showContent(item)}>
            <div>{item}</div>
          </div>
        ))}
      </div>
      <div style={{fontSize:'20px'}}>
          {'fsjhgkjhjgfedlkjhgpdth'}
      </div>
    </div>
  );
};

function Node({ subfolder, onClick }: { subfolder: Directory ,onClick:() => Promise<void>}) {
  return (
    <div>
      <div>{subfolder.name}</div>

      {subfolder?.subDirs.map((item) => (
        <div style={{ marginLeft: "20px" }}>
          <Node subfolder={item} onClick={onClick}></Node>
        </div>
      ))}

      {subfolder?.files.map((item) => (
        <div style={{ marginLeft: "20px" }} onClick={()=>onClick(item)}>
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
}

export default Folder;
