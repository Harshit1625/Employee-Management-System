

//dto is basically a security guard before all the layers
package com.crud.ems_backend.dto;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class EmployeeDTO {
    private Long Id;
    private String firstName;
    private String lastName;
    private String email;
}
