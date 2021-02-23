package com.ubs.h3microsupremacy.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "members")
public class Member {
	@Id
	String gpin;
	
	String name;
	String designation;
	String department;
	String team;
	String email;

	public Member() {
	}

	public Member(String gpin, String name, String desgination, String department, String team, String email) {
		this.gpin = gpin;
		this.name = name;
		this.designation = desgination;
		this.department = department;
		this.team = team;
		this.email = email;
	}

	public String getGpin() {
		return gpin;
	}

	public void setGpin(String gpin) {
		this.gpin = gpin;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getTeam() {
		return team;
	}

	public void setTeam(String team) {
		this.team = team;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
