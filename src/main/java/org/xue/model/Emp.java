package org.xue.model;

public class Emp {
    private int id;
    private String name;
    private String job;
    private String idCard;
    private String username;
    private String password;
    private String nickname;
    private int state;
    private String entryDate;
    private String birthday;
    private String empId;

    public Emp(int id, String name, String job, String idCard, String username, String password, String nickname, int state, String entryDate, String birthday, String empId) {
        this.id = id;
        this.name = name;
        this.job = job;
        this.idCard = idCard;
        this.username = username;
        this.password = password;
        this.nickname = nickname;
        this.state = state;
        this.entryDate = entryDate;
        this.birthday = birthday;
        this.empId = empId;
    }

    public Emp(String name, String job, String idCard, String username, String password, String nickname, int state, String entryDate, String birthday, String empId) {
        this.name = name;
        this.job = job;
        this.idCard = idCard;
        this.username = username;
        this.password = password;
        this.nickname = nickname;
        this.state = state;
        this.entryDate = entryDate;
        this.birthday = birthday;
        this.empId = empId;
    }

    public Emp() {
    }

    @Override
    public String toString() {
        return "Emp{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", job='" + job + '\'' +
                ", idCard=" + idCard +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", nickname='" + nickname + '\'' +
                ", state=" + state +
                ", entryDate='" + entryDate + '\'' +
                ", birthday='" + birthday + '\'' +
                ", empId=" + empId +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public String getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(String entryDate) {
        this.entryDate = entryDate;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getEmpId() {
        return empId;
    }

    public void setEmpId(String empId) {
        this.empId = empId;
    }
}
