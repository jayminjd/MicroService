import { Exclude, Expose, Transform } from 'class-transformer';
import { RoleEntity } from './role.entity';

export class UserEntity {
  id: number;
  firstName: string;
  lastName: string;

  @Exclude()
  password: string;

  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  @Transform(role=>role.name)
  role: RoleEntity;

  constructor(partial: Partial<UserEntity>) {
    console.log(partial);
    
    Object.assign(this, partial);
  }
}
