---
uid: Qdk.Std.Math-toc
title: Std.Math namespace
description: Table of contents for the Q# Math namespace
author: bradben
ms.author: brbenefield
ms.date: 01/22/2025
ms.topic: landing-page
---

# Std.Math

The Std.Math namespace contains the following items:

| Name | Description |
|------|-------------|
| [AbsComplex](xref:Qdk.Std.Math.AbsComplex) | Returns the absolute value of a complex number of type `Complex`. |
| [AbsComplexPolar](xref:Qdk.Std.Math.AbsComplexPolar) | Returns the absolute value of a complex number of type `ComplexPolar`. |
| [AbsD](xref:Qdk.Std.Math.AbsD) | Returns the absolute value of a double-precision floating-point number. |
| [AbsI](xref:Qdk.Std.Math.AbsI) | Returns the absolute value of an integer. |
| [AbsL](xref:Qdk.Std.Math.AbsL) | Returns the absolute value of a big integer. |
| [AbsSquaredComplex](xref:Qdk.Std.Math.AbsSquaredComplex) | Returns the squared absolute value of a complex number of type `Complex`. |
| [AbsSquaredComplexPolar](xref:Qdk.Std.Math.AbsSquaredComplexPolar) | Returns the squared absolute value of a complex number of type `ComplexPolar`. |
| [ApproximateFactorial](xref:Qdk.Std.Math.ApproximateFactorial) | Returns an approximate factorial of a given number. |
| [ArcCos](xref:Qdk.Std.Math.ArcCos) | Returns the angle whose cosine is the specified number. |
| [ArcCosh](xref:Qdk.Std.Math.ArcCosh) | Computes the inverse hyperbolic cosine of a number. |
| [ArcSin](xref:Qdk.Std.Math.ArcSin) | Returns the angle whose sine is the specified number. |
| [ArcSinh](xref:Qdk.Std.Math.ArcSinh) | Computes the inverse hyperbolic sine of a number. |
| [ArcTan](xref:Qdk.Std.Math.ArcTan) | Returns the angle whose tangent is the specified number. |
| [ArcTan2](xref:Qdk.Std.Math.ArcTan2) | Returns the angle whose tangent is the quotient of two specified numbers. |
| [ArcTanh](xref:Qdk.Std.Math.ArcTanh) | Computes the inverse hyperbolic tangent of a number. |
| [ArgComplex](xref:Qdk.Std.Math.ArgComplex) | Returns the phase of a complex number of type `Complex`. |
| [ArgComplexPolar](xref:Qdk.Std.Math.ArgComplexPolar) | Returns the phase of a complex number of type `ComplexPolar`. |
| [Binom](xref:Qdk.Std.Math.Binom) | Returns the approximate binomial coefficient of two integers. |
| [BitSizeI](xref:Qdk.Std.Math.BitSizeI) | For a non-negative integer `a`, returns the number of bits required to represent `a`. NOTE: This function returns the smallest n such that a < 2^n. |
| [BitSizeL](xref:Qdk.Std.Math.BitSizeL) | For a non-negative integer `a`, returns the number of bits required to represent `a`. NOTE: This function returns the smallest n such that a < 2^n. |
| [Ceiling](xref:Qdk.Std.Math.Ceiling) | Returns the smallest integer greater than or equal to the specified number. For example: Ceiling(3.1) = 4; Ceiling(-3.7) = -3 |
| [Complex](xref:Qdk.Std.Math.Complex) | Represents a complex number by its real and imaginary components. The first element of the tuple is the real component, the second one - the imaginary component. |
| [ComplexPolar](xref:Qdk.Std.Math.ComplexPolar) | Represents a complex number in polar form. The polar representation of a complex number is c = r⋅𝑒^(t𝑖). |
| [ContinuedFractionConvergentI](xref:Qdk.Std.Math.ContinuedFractionConvergentI) | Finds the continued fraction convergent closest to `fraction` with the denominator less or equal to `denominatorBound` Using process similar to this: https://nrich.maths.org/1397 |
| [ContinuedFractionConvergentL](xref:Qdk.Std.Math.ContinuedFractionConvergentL) | Finds the continued fraction convergent closest to `fraction` with the denominator less or equal to `denominatorBound` Using process similar to this: https://nrich.maths.org/1397 |
| [Cos](xref:Qdk.Std.Math.Cos) | Returns the cosine of the specified angle. |
| [Cosh](xref:Qdk.Std.Math.Cosh) | Returns the hyperbolic cosine of the specified angle. |
| [DivRemI](xref:Qdk.Std.Math.DivRemI) | Divides one Integer value by another, returns the result and the remainder as a tuple. |
| [DivRemL](xref:Qdk.Std.Math.DivRemL) | Divides one BigInteger value by another, returns the result and the remainder as a tuple. |
| [DividedByC](xref:Qdk.Std.Math.DividedByC) | Returns the quotient of two inputs of type `Complex`. |
| [DividedByCP](xref:Qdk.Std.Math.DividedByCP) | Returns the quotient of two inputs of type `ComplexPolar`. |
| [E](xref:Qdk.Std.Math.E) | Returns a double-precision approximation of the mathematical constant 𝒆 ≈ 2.7182818284590452354 |
| [ExpModI](xref:Qdk.Std.Math.ExpModI) | Returns an integer raised to a given power, with respect to a given modulus. I.e. (expBase^power) % modulus. |
| [ExpModL](xref:Qdk.Std.Math.ExpModL) | Returns an integer raised to a given power, with respect to a given modulus. I.e. (expBase^power) % modulus. |
| [ExtendedGreatestCommonDivisorI](xref:Qdk.Std.Math.ExtendedGreatestCommonDivisorI) | Returns a tuple (u,v) such that u*a+v*b=GCD(a,b) Note: GCD is always positive except that GCD(0,0)=0. |
| [ExtendedGreatestCommonDivisorL](xref:Qdk.Std.Math.ExtendedGreatestCommonDivisorL) | Returns a tuple (u,v) such that u*a+v*b=GCD(a,b) Note: GCD is always positive except that GCD(0,0)=0. |
| [FactorialI](xref:Qdk.Std.Math.FactorialI) | Returns the factorial of a given number. |
| [FactorialL](xref:Qdk.Std.Math.FactorialL) | Returns the factorial of a given number. |
| [Floor](xref:Qdk.Std.Math.Floor) | Returns the largest integer less than or equal to the specified number. For example: Floor(3.7) = 3; Floor(-3.1) = -4 |
| [GreatestCommonDivisorI](xref:Qdk.Std.Math.GreatestCommonDivisorI) | Computes the greatest common divisor of two integers. Note: GCD is always positive except that GCD(0,0)=0. |
| [GreatestCommonDivisorL](xref:Qdk.Std.Math.GreatestCommonDivisorL) | Computes the greatest common divisor of two integers. Note: GCD is always positive except that GCD(0,0)=0. |
| [HammingWeightI](xref:Qdk.Std.Math.HammingWeightI) | Returns the number of 1 bits in the binary representation of integer `n`. |
| [InverseModI](xref:Qdk.Std.Math.InverseModI) | Returns the multiplicative inverse of a modular integer. |
| [InverseModL](xref:Qdk.Std.Math.InverseModL) | Returns the multiplicative inverse of a modular integer. |
| [IsCoprimeI](xref:Qdk.Std.Math.IsCoprimeI) | Returns if two integers are co-prime. |
| [IsCoprimeL](xref:Qdk.Std.Math.IsCoprimeL) | Returns if two integers are co-prime. |
| [IsInfinite](xref:Qdk.Std.Math.IsInfinite) | Returns whether a given floating-point value is either positive or negative infinity. |
| [IsNaN](xref:Qdk.Std.Math.IsNaN) | Returns whether a given floating-point value is not a number (i.e. is NaN). |
| [LargestFixedPoint](xref:Qdk.Std.Math.LargestFixedPoint) | Returns the largest representable number for specific fixed point dimensions. |
| [Lg](xref:Qdk.Std.Math.Lg) | Computes the base-2 logarithm of a number. |
| [Log](xref:Qdk.Std.Math.Log) | Returns the natural (base _e_) logarithm of a specified number. |
| [Log10](xref:Qdk.Std.Math.Log10) | Returns the base-10 logarithm of a specified number. |
| [LogFactorialD](xref:Qdk.Std.Math.LogFactorialD) | Returns the approximate natural logarithm of the factorial of a given integer. |
| [LogGammaD](xref:Qdk.Std.Math.LogGammaD) | Returns the natural logarithm of the gamma function (aka the log-gamma function). |
| [LogOf2](xref:Qdk.Std.Math.LogOf2) | Returns a double-precision approximation of the constant ㏑2 ≈ 0.6931471805599453 |
| [Max](xref:Qdk.Std.Math.Max) | Given an array of integers, returns the largest element. |
| [MaxD](xref:Qdk.Std.Math.MaxD) | Returns the larger of two specified numbers. |
| [MaxI](xref:Qdk.Std.Math.MaxI) | Returns the larger of two specified numbers. |
| [MaxL](xref:Qdk.Std.Math.MaxL) | Returns the larger of two specified numbers. |
| [Min](xref:Qdk.Std.Math.Min) | Given an array of integers, returns the smallest element. |
| [MinD](xref:Qdk.Std.Math.MinD) | Returns the smaller of two specified numbers. |
| [MinI](xref:Qdk.Std.Math.MinI) | Returns the smaller of two specified numbers. |
| [MinL](xref:Qdk.Std.Math.MinL) | Returns the smaller of two specified numbers. |
| [MinusC](xref:Qdk.Std.Math.MinusC) | Returns the difference between two inputs of type `Complex`. |
| [MinusCP](xref:Qdk.Std.Math.MinusCP) | Returns the difference between two inputs of type `ComplexPolar`. |
| [ModulusI](xref:Qdk.Std.Math.ModulusI) | Computes the canonical residue of `value` modulo `modulus`. The result is always in the range 0..modulus-1 even for negative numbers. |
| [ModulusL](xref:Qdk.Std.Math.ModulusL) | Computes the canonical residue of `value` modulo `modulus`. The result is always in the range 0..modulus-1 even for negative numbers. |
| [NegationC](xref:Qdk.Std.Math.NegationC) | Returns the unary negation of an input of type `Complex`. |
| [NegationCP](xref:Qdk.Std.Math.NegationCP) | Returns the unary negation of an input of type `ComplexPolar` |
| [PI](xref:Qdk.Std.Math.PI) | Returns a double-precision approximation of the matematical constant 𝝅 ≈ 3.14159265358979323846 |
| [PNorm](xref:Qdk.Std.Math.PNorm) | Returns the `L(p)` norm of a vector of `Double`s.  That is, given an array x of type `Double[]`, this returns the p-norm \|x̄\|ₚ= (∑(xᵢ)ᵖ)¹ᐟᵖ. |
| [PNormalized](xref:Qdk.Std.Math.PNormalized) | Normalizes a vector of `Double`s in the `L(p)` norm.  That is, given an array x of type `Double[]`, this returns an array where all elements are divided by the p-norm \|x̄\|ₚ. Function leaves array with norm 0 unchanged. |
| [PlusC](xref:Qdk.Std.Math.PlusC) | Returns the sum of two inputs of type `Complex`. |
| [PlusCP](xref:Qdk.Std.Math.PlusCP) | Returns the sum of two inputs of type `ComplexPolar`. |
| [PowC](xref:Qdk.Std.Math.PowC) | Returns a number raised to a given power of type `Complex`. Note that this is a multi-valued function, but only one value is returned. |
| [PowCP](xref:Qdk.Std.Math.PowCP) | Returns a number raised to a given power of type `ComplexPolar`. Note that this is a multi-valued function, but only one value is returned. |
| [RealMod](xref:Qdk.Std.Math.RealMod) | Computes the modulus between two real numbers. |
| [Round](xref:Qdk.Std.Math.Round) | Returns the nearest integer to the specified number. For example: Round(3.7) = 4; Round(-3.7) = -4 |
| [SignD](xref:Qdk.Std.Math.SignD) | Returns -1, 0 or +1 that indicates the sign of a number. |
| [SignI](xref:Qdk.Std.Math.SignI) | Returns -1, 0 or +1 that indicates the sign of a number. |
| [SignL](xref:Qdk.Std.Math.SignL) | Returns -1, 0 or +1 that indicates the sign of a number. |
| [Sin](xref:Qdk.Std.Math.Sin) | Returns the sine of the specified angle. |
| [Sinh](xref:Qdk.Std.Math.Sinh) | Returns the hyperbolic sine of the specified angle. |
| [SmallestFixedPoint](xref:Qdk.Std.Math.SmallestFixedPoint) | Returns the smallest representable number for specific fixed point dimensions. |
| [Sqrt](xref:Qdk.Std.Math.Sqrt) | Returns the square root of a specified number. |
| [SquaredNorm](xref:Qdk.Std.Math.SquaredNorm) | Returns the squared 2-norm of a vector. |
| [Tan](xref:Qdk.Std.Math.Tan) | Returns the tangent of the specified angle. |
| [Tanh](xref:Qdk.Std.Math.Tanh) | Returns the hyperbolic tangent of the specified angle. |
| [TimesC](xref:Qdk.Std.Math.TimesC) | Returns the product of two inputs of type `Complex`. |
| [TimesCP](xref:Qdk.Std.Math.TimesCP) | Returns the product of two inputs of type `ComplexPolar`. |
| [TrailingZeroCountI](xref:Qdk.Std.Math.TrailingZeroCountI) | For a non-zero integer `a`, returns the number of trailing zero bits in the binary representation of `a`. |
| [TrailingZeroCountL](xref:Qdk.Std.Math.TrailingZeroCountL) | For a non-zero integer `a`, returns the number of trailing zero bits in the binary representation of `a`. |
| [Truncate](xref:Qdk.Std.Math.Truncate) | Returns the integral part of a number. For example: Truncate(3.7) = 3; Truncate(-3.7) = -3 |
