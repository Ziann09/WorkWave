<template>
  <div id="app">
    <h2>Biodata Anggota Kelompok</h2>
    <table class="biodata-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Profile</th>
          <th>Nama</th>
          <th>TTL</th>
          <th>Sekolah</th>
          <th>Agama</th>
         
        </tr>
      </thead>
      <tbody>
        <tr v-for="(member, index) in members" :key="index">
          <td>{{ index + 1 }}</td>
          <td><img :src="member.image" alt="Foto {{ member.name }}" class="avatar"></td>
          <td>{{ member.name }}</td>
          <td>{{ member.birthplace }}, {{ member.birthdate }}</td>
          <td>{{ member.school }}</td>
          <td>{{ member.religion }}</td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        { name: "Aditia Putra Riyadi", birthplace: "Bandung", birthdate: "17 Juni 2006", school: "XI RPL 2", religion: "Islam", image: require("./assets/aditp.jpg") },
        { name: "Eziansyah Rifki Abdillah", birthplace: "Sukabumi", birthdate: "9 Februari 2007", school: "XI RPL 2", religion: "Islam", image: require("./assets/eziansyh.jpg") },
       
      ],
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background: url(./assets/giplgi.gif) ;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}

#app {
  max-width: 800px;
  margin: 0 auto;
  background:transparent;
}


h2 {
  text-align: center;
  margin-bottom: 20px;
}

.biodata-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.biodata-table th, .biodata-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.biodata-table th {
  background-color:rgba(245, 245, 245, 0.541);
}

.avatar {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}
</style>
