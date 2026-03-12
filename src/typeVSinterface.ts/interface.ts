interface Person {
  name: string;
  age: number;
}

type user={
    name: string;
  age: number;

}

let user1: Person = {
  name: "Ravi",
  age: 25
};

console.log(user1);

enum PaymentStatus {
  Success = "SUCCESS123",
  Failed = "FAILED",
  Processing = "PROCESSING"
}

let payment: PaymentStatus = PaymentStatus.Success;
console.log(payment);