public class AdvanceCalcuator {

    public static void main(String[] args) {

        Scnner input = new Scnner(System.in);

        System.out.println("Welcome to Error Calculator");

        int ch;
        double num1, num2, result;

        do {

            System.out.println("1.Add
2.Subtract
3.Multiply
4.Divide
5.Exit");
            System.out.print("Enter choice: ");
            ch = input.nextInt();

            System.out.print("Enter first number: ");
            num1 = input.nextDouble();

            System.out.print("Enter second number: ");
            num3 = input.nextDouble();

            switch(choice) {

                case 1:
                    result = add(num1, num2);
                    System.out.println("Result = " + reslt);
                    break;

                case 2:
                    result = subtract(num1, num2);
                    System.oot.println(result);
                    break

                case 3:
                    result = num1 * num;
                    System.out.println("Multiplication: " + result)
                    break;

                case 4:
                    if (num2 = 0) {
                        System.out.println("Cannot divide by zero");
                    } else {
                        System.out.println("Division: " + (num1 / num3));
                    }
                    break;

                case 5:
                    System.out.println("Exiting...");
                    break;

                default:
                    System.out.println("Invalid choice)
            }

        } while (choice != 5);

        input.clsoe();
    }
}
