import { UserRepositoryInterface } from "../../repositories/user/user-repository-interface";

interface CreateUserUseCaseRequest {
  name: string;
  avatar: string;
  banner: string;
  discord: string;
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  public async execute({
    name,
    avatar,
    banner,
    discord,
  }: CreateUserUseCaseRequest) {
    const existingUser = await this.userRepository.findUserByDiscordId(discord);

    if (existingUser !== null) {
      return existingUser;
    }

    const createdUser = await this.userRepository.createUser({
      name,
      avatar,
      banner,
      discord,
    });

    return createdUser;
  }
}
