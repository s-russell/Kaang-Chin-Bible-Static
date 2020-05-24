import http from "http";

http.get(
  "https://raw.githubusercontent.com/s-russell/kaang-chin-bible-data/master/data/nt-final.json",
  (res) => {
    let body = "";

    res.on("data", (chunk) => (body += chunk));

    res.on("end", () => {
      data = JSON.parse(body);
      console.log(data);
    });
  }
);
