package com.ubs.h3microsupremacy.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ubs.h3microsupremacy.models.Member;
import com.ubs.h3microsupremacy.repositories.MemberRepository;

@RestController
public class MemberController {

	@Autowired
	MemberRepository repository;

	@RequestMapping(method = RequestMethod.GET, value = "/members")
	public Iterable<Member> member() {
		return repository.findAll();
	}

	@RequestMapping(method = RequestMethod.POST, value = "/members")
	public Member save(@RequestBody Member member) {
		repository.save(member);
		return member;
	}

	@RequestMapping(method = RequestMethod.GET, value = "/members/{gpin}")
	public Optional<Member> show(@PathVariable String gpin) {
		return repository.findById(gpin);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/members/{gpin}")
	public Member update(@PathVariable String gpin, @RequestBody Member member) {
		Optional<Member> optcontact = repository.findById(gpin);
		Member model = optcontact.get();
		if (member.getGpin() != null) {
			model.setGpin(member.getGpin());
		}
		if (member.getName() != null) {
			model.setName(member.getName());
		}
		if (member.getDepartment() != null) {
			model.setDepartment(member.getDepartment());
		}
		if (member.getDesignation() != null) {
			model.setDesignation(member.getDesignation());
		}
		if (member.getTeam() != null) {
			model.setTeam(member.getTeam());
		}
		if (member.getEmail() != null) {
			model.setEmail(member.getEmail());
		}
		repository.save(model);
		return model;
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/members/{gpin}")
	public String delete(@PathVariable String gpin) {
		Optional<Member> optMember = repository.findById(gpin);
		Member member = optMember.get();
		repository.delete(member);
		return "";
	}
}
