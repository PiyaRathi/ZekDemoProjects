package com.ubs.h3microsupremacy.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ubs.h3microsupremacy.models.Member;

public interface MemberRepository extends MongoRepository<Member, String> {
}
