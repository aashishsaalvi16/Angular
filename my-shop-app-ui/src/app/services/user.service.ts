import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface UserSignUp {
  firstName: string;
  middleName?: string;
  lastName: string;
  phone: string;
  email: string;
  address1: string;
  address2?: string;
}

export interface UserResponse {
  userId: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  phone: string;
  email: string;
  address1: string;
  address2?: string;
  createdOn: string;
  createdBy: string;
  modifiedOn?: string;
  modifiedBy?: string;
  isActive: boolean;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  registerUser(userData: UserSignUp): Observable<UserResponse> {
    const payload = {
      ...userData,
      createdBy: 'User',
      isActive: true,
    };
    return this.http.post<UserResponse>(`${this.apiUrl}/UserMaster`, payload);
  }
}
