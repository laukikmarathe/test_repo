using System;
using System.Data;
using System.Text.RegularExpressions;

class AdvancedCalculator
{
    static void Main(string[] args)
    {
        Console.WriteLine("==== ADVANCED SCIENTIFIC CALCULATOR ====
");
        Console.WriteLine("Supports: +, -, *, /, ^, (), sin(), cos(), tan(), log(), ln(), sqrt(), abs(), exp()");
        Console.WriteLine("Example:  5 + sin(30) * 2 ^ 3
");

        while (true)
        {
            Console.Write("
Enter expression (or type exit): ");
            string input = Console.ReadLine().Trim();

            if (input.ToLower() == "exit")
            {
                Console.WriteLine("Exiting...");
                break;
            }

            try
            {
                string processed = ProcessFunctions(input);
                double result = Evaluate(processed);
                Console.WriteLine("Result = " + result);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error evaluating expression: " + ex.Message);
            }
        }
    }

    static string ProcessFunctions(string expr)
    {
        expr = Regex.Replace(expr, @"sin\(([^)]+)\)", m =>
        {
            double v = double.Parse(m.Groups[1].Value);
            return Math.Sin(v * Math.PI / 180).ToString();
        });

        expr = Regex.Replace(expr, @"cos\(([^)]+)\)", m =>
        {
            double v = double.Parse(m.Groups[1].Value);
            return Math.Cos(v * Math.PI / 180).ToString();
        });

        expr = Regex.Replace(expr, @"tan\(([^)]+)\)", m =>
        {
            double v = double.Parse(m.Groups[1].Value);
            return Math.Tan(v * Math.PI / 180).ToString();
        });

        expr = Regex.Replace(expr, @"log\(([^)]+)\)", m =>
        {
            double v = double.Parse(m.Groups[1].Value);
            return Math.Log10(v).ToString();
        });

        expr = Regex.Replace(expr, @"ln\(([^)]+)\)", m =>
        {
            double v = double.Parse(m.Groups[1].Value);
            return Math.Log(v).ToString();
        });

        expr = Regex.Replace(expr, @"sqrt\(([^)]+)\)", m =>
        {
            double v = double.Parse(m.Groups[1].Value);
            return Math.Sqrt(v).ToString();
        });

        expr = Regex.Replace(expr, @"abs\(([^)]+)\)", m =>
        {
            double v = double.Parse(m.Groups[1].Value);
            return Math.Abs(v).ToString();
        });

        expr = Regex.Replace(expr, @"exp\(([^)]+)\)", m =>
        {
            double v = double.Parse(m.Groups[1].Value);
            return Math.Exp(v).ToString();
        });

        expr = Regex.Replace(expr, @"(\d+)\s*\^\s*(\d+)", m =>
        {
            double a = double.Parse(m.Groups[1].Value);
            double b = double.Parse(m.Groups[2].Value);
            return Math.Pow(a, b).ToString();
        });

        return expr;
    }

    static double Evaluate(string expression)
    {
        DataTable table = new DataTable();
        table.Columns.Add("expression", typeof(string), expression);
        DataRow row = table.NewRow();
        table.Rows.Add(row);
        return double.Parse((string)row["expression"]);
    }
}
