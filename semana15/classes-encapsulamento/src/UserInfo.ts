import JSONFileManager from "./JSONFileManager";
import moment from "moment";

const fileManager: JSONFileManager = new JSONFileManager("data.json");
const accounts = fileManager.getObjectFromFile();

export class Transaction {
  public date: string;
  public value: number;
  public description: string;

  constructor(newDate: string, newValue: number, newDescription: string) {
    this.date = newDate;
    this.value = newValue;
    this.description = newDescription;
  }
}

export class UserAccount {
  private name: string;
  private age: number;
  private cpf: string;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(newName: string, newAge: number, newCpf: string) {
    this.name = newName;
    this.age = newAge;
    this.cpf = newCpf;
  }

  public getBalance = (arr: any[], name: string, cpf: string): any => {
    let balance = arr.forEach((element: any, i: number, array: any) => {
      if (element.cpf === cpf && element.name === name) {
        console.log(
          `Olá ${
            element.name
          }! O saldo da sua conta é de R$ ${element.balance.toFixed(2)}`
        );
      }
    });

    return balance;
  };

  public addBalance = (value: number): void => {
    let elementsIndex = accounts.findIndex(
      (element: any) => element.cpf == this.cpf && element.name == this.name
    );
    let newArray = [...accounts];

    let today = moment().format("DD/MM/YYYY");

    let newTransaction: Transaction = {
      value: value,
      date: today,
      description: `Depósito no valor de R$${value.toFixed(2)}.`,
    };

    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      balance: newArray[elementsIndex].balance + value,
      transactions: newArray[elementsIndex].transactions = [
        ...newArray[elementsIndex].transactions,
        newTransaction,
      ],
    };

    fileManager.writeObjectToFile(newArray);
    console.log("Saldo atualizado com sucesso!");
  };

  public payBill = (desc: string, value: number): void => {
    let elementsIndex = accounts.findIndex(
      (element: any) => element.cpf == this.cpf && element.name == this.name
    );
    let newArray = [...accounts];

    let today = moment().format("DD/MM/YYYY");

    let newTransaction: Transaction = {
      value: value,
      date: today,
      description: desc,
    };

    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      balance: newArray[elementsIndex].balance - value,
      transactions: newArray[elementsIndex].transactions = [
        ...newArray[elementsIndex].transactions,
        newTransaction,
      ],
    };

    fileManager.writeObjectToFile(newArray);
    console.log("Pagamento realizado com sucesso!");
  };

  public transferAmount = (
    receiverName: string,
    receiverCpf: string,
    value: number
  ): void => {
    try {
      let elementsIndex = accounts.findIndex(
        (element: any) => element.cpf == this.cpf && element.name == this.name
      );

      let newArray = [...accounts];

      let today = moment().format("DD/MM/YYYY");

      let newTransactionSender: Transaction = {
        value: value,
        date: today,
        description: `Transferência no valor de R$${value.toFixed(
          2
        )} para ${receiverName}.`,
      };

      let newTransactionReceiver: Transaction = {
        value: value,
        date: today,
        description: `Depósito no valor de R$${value.toFixed(2)} recebido de ${
          this.name
        }.`,
      };

      // Usuário
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        balance: newArray[elementsIndex].balance - value,
        transactions: newArray[elementsIndex].transactions = [
          ...newArray[elementsIndex].transactions,
          newTransactionSender,
        ],
      };

      let elementsIndex2 = accounts.findIndex(
        (element: any) =>
          element.cpf == receiverCpf && element.name == receiverName
      );

      // Destinatário
      newArray[elementsIndex2] = {
        ...newArray[elementsIndex2],
        balance: newArray[elementsIndex2].balance + value,
        transactions: newArray[elementsIndex2].transactions = [
          ...newArray[elementsIndex2].transactions,
          newTransactionReceiver,
        ],
      };

      fileManager.writeObjectToFile(newArray);
      console.log("Transferência realizada com sucesso!");
    } catch (error) {
      console.log("Erro ao atualizar a base de dados.", error);
    }
  };
}
