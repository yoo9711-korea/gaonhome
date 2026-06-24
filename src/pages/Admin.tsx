import { useState, useEffect } from "react";

export default function Admin() {
  
     const [jobs, setJobs] = useState<any[]>([]);
      const [search, setSearch] = useState("");
const [form, setForm] = useState({
  name: "",
  phone: "",
  area: "",
  work: "",
  visitDate: "",
  engineer: "",
  memo: "",
  amount: "",
});

useEffect(() => {
  const auth = sessionStorage.getItem("admin");

  if (auth !== "ok") {
    window.location.href = "/";
  }
}, []);

useEffect(() => {
  const saved = localStorage.getItem("lifefix_jobs");

  if (saved) {
    setJobs(JSON.parse(saved));
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    "lifefix_jobs",
    JSON.stringify(jobs)
  );
}, [jobs]);

 return (
  <div style={{ padding: "30px" }}>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>🔧 라이프픽스 관리자</h1>

      <button
        onClick={() => {
          sessionStorage.removeItem("admin");
          window.location.href = "/";
        }}
        style={{
          background: "#f44336",
          color: "#fff",
          border: "none",
          padding: "10px 15px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        로그아웃
      </button>
    </div>
  
<div
    style={{
      background: "#1976d2",
      color: "white",
      padding: "15px 25px",
      borderRadius: "10px",
      fontWeight: "bold",
    }}
  >
    전체 고객 {jobs.length}명
  </div>

  <div
    style={{
      background: "#388e3c",
      color: "white",
      padding: "15px 25px",
      borderRadius: "10px",
      fontWeight: "bold",
    }}
  >
    작업완료 {
      jobs.filter(
        (j) => j.status === "작업완료"
      ).length
    }건
  </div>

  <div
    style={{
      background: "#f57c00",
      color: "white",
      padding: "15px 25px",
      borderRadius: "10px",
      fontWeight: "bold",
    }}
  >
    정산완료 {
      jobs.filter(
        (j) => j.status === "정산완료"
      ).length
    }건
  </div>

    <div
  style={{
    background: "#d32f2f",
    color: "white",
    padding: "15px 25px",
    borderRadius: "10px",
    fontWeight: "bold",
  }}
>
  총매출 ₩
  {jobs
    .reduce(
      (sum, item) =>
        sum + Number(item.amount || 0),
      0
    )
    .toLocaleString()}
</div>

     <div style={{ marginBottom: "20px" }}>
        <button>📋 접수관리</button>
        <button style={{ marginLeft: "10px" }}>👷 협력업체</button>
        <button style={{ marginLeft: "10px" }}>📞 고객관리</button>
      </div>
 
        <div
  style={{
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    marginBottom: "30px",
    fontSize: "18px"
  }}
>

  <h3>신규 고객 등록</h3>

  <input
    placeholder="고객명"
    value={form.name}
    onChange={(e) =>
      setForm({
        ...form,
        name: e.target.value,
      })
    }

   style={{
  width: "220px",
  height: "55px",
  fontSize: "18px",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
}}

  />
  <input
    placeholder="연락처"
    value={form.phone}
    onChange={(e) =>
      setForm({
        ...form,
        phone: e.target.value,
      })
    }

style={{
  width: "220px",
  height: "55px",
  fontSize: "18px",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
}}
  />
 <input
    placeholder="지역"
    value={form.area}
    onChange={(e) =>
      setForm({
        ...form,
        area: e.target.value,
      })
    }
   style={{
  width: "220px",
  height: "55px",
  fontSize: "18px",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
}}
  />
  <input
    placeholder="작업내용"
    value={form.work}
    onChange={(e) =>
      setForm({
        ...form,
        work: e.target.value,
      })
    }
style={{
  width: "220px",
  height: "55px",
  fontSize: "18px",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
}}
  />

<input
  type="date"
  value={form.visitDate}
  onChange={(e) =>
    setForm({
      ...form,
      visitDate: e.target.value,
    })
  }
 style={{
  width: "180px",
  height: "45px",
  fontSize: "16px",
  padding: "8px",
  marginTop: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
}}
/>
<input
  placeholder="배정기사"
  value={form.engineer}
  onChange={(e) =>
    setForm({
      ...form,
      engineer: e.target.value,
    })
  }

style={{
  width: "180px",
  height: "45px",
  fontSize: "16px",
  padding: "8px",
  marginTop: "15px",
  marginLeft: "10px",
}}
/>
<textarea
  placeholder="고객메모"
  value={form.memo}
  onChange={(e) =>
    setForm({
      ...form,
      memo: e.target.value,
    })
  }
  style={{
    width: "350px",
    height: "45px",
    padding: "10px",
    borderRadius: "8px",
    marginTop: "1px",
    resize: "none",
    verticalAlign: "middle",
  }}
></textarea>
<input
  type="number"
  placeholder="작업금액"
  value={form.amount}
  onChange={(e) =>
    setForm({
      ...form,
      amount: e.target.value,
    })
  }
  style={{
    width: "180px",
    height: "45px",
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginLeft: "10px",
    fontSize: "16px",
  }}
/>

 <button
  style={{
    height: "40px",
    minWidth: "350px",
    marginTop: "15px",
    marginLeft: "10px",
    background: "#2e7d32",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
  onClick={() => {
    if (!form.name) return;

    setJobs([
      ...jobs,
  {
  id: jobs.length + 1,
  regDate: new Date().toLocaleDateString(),
  name: form.name,
  phone: form.phone,
  area: form.area,
  work: form.work,
  visitDate: form.visitDate,
  engineer: form.engineer,
  memo: form.memo,
  amount: form.amount,
  status: "접수대기",
}
    ]);

    setForm({
  name: "",
  phone: "",
  area: "",
  work: "",
  visitDate: "",
  engineer: "",
  memo: "",
  amount: "",
});
  }}
>
  등록
</button>
   
</div>

   <input
  placeholder="🔍 고객 검색"
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
  style={{
    width: "250px",
    height: "40px",
    padding: "0 15px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    marginBottom: "15px",
  }}
/>

      <table
    style={{
    width: "100%",
    borderCollapse: "collapse",
    background: "white",
  }}
>
        <thead>
          <tr>
            <th>번호</th>
            <th>접수일</th>
            <th>고객명</th>
            <th>연락처</th>
            <th>지역</th>
            <th>작업내용</th>
            <th>상태</th>
            <th>방문예정일</th>
            <th>배정기사</th>
            <th>관리</th>
             </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.id}</td>
              <td>{job.regDate}</td>
              <td>{job.name}</td>
              <td>{job.phone}</td>
              <td>{job.area}</td>
              <td>{job.work}</td>
              <td>
  <span
    style={{
      background:
        job.status === "작업완료"
          ? "#C8E6C9"
          : "#FFE082",
      padding: "4px 10px",
      borderRadius: "6px",
      fontWeight: "bold",
    }}
  >
    {job.status}
  </span>
</td>

<td>{job.visitDate}</td>

<td>{job.engineer}</td>

  <td>
  <button
  onClick={() => {
    const nextStatus: Record<string, string> = {
      "접수대기": "기사배정",
      "기사배정": "방문예정",
      "방문예정": "작업중",
      "작업중": "작업완료",
      "작업완료": "정산완료",
    };

    setJobs(
      jobs.map((item) =>
        item.id === job.id
          ? {
              ...item,
              status:
                nextStatus[item.status] ??
                item.status,
            }
          : item
      )
    );
  }}
>
  다음단계
</button>

  <button
    onClick={() => {
      setJobs(
        jobs.filter(
          (item) => item.id !== job.id
        )
      );
    }}
    style={{
      background: "#f44336",
      color: "white",
      border: "none",
      padding: "5px 10px",
      borderRadius: "4px",
      cursor: "pointer",
    }}
  >
    삭제
  </button>
</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}