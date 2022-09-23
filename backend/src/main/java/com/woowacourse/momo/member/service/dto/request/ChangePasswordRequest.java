package com.woowacourse.momo.member.service.dto.request;

import javax.validation.constraints.NotNull;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@AllArgsConstructor
public class ChangePasswordRequest {

    @NotNull
    private String newPassword;
    @NotNull
    private String oldPassword;
}
