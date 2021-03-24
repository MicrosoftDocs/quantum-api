---
uid: Microsoft.Quantum.Numerics.Samples.EvaluatePolynomial
title: EvaluatePolynomial operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Numerics.Samples
qsharp.name: EvaluatePolynomial
qsharp.summary: >-
  Evaluates the polynomial given by `coefficients` at the
  evaluation points provided.
---

# EvaluatePolynomial operation

Namespace: [Microsoft.Quantum.Numerics.Samples](xref:Microsoft.Quantum.Numerics.Samples)

Package: [ResourceCounting](https://nuget.org/packages/ResourceCounting)


Evaluates the polynomial given by `coefficients` at theevaluation points provided.

```qsharp
operation EvaluatePolynomial (coefficients : Double[], evaluationPoints : Double[], numBits : Int, pointPos : Int, odd : Bool, even : Bool) : Double[]
```


## Input

### coefficients : [Double](xref:microsoft.quantum.lang-ref.double)[]

Polynomial coefficients, see Evaluate[Even/Odd/_]PolynomialFxP


### evaluationPoints : [Double](xref:microsoft.quantum.lang-ref.double)[]

Points at which to evaluate the polynomial


### numBits : [Int](xref:microsoft.quantum.lang-ref.int)

Number of bits to use to represent each fixed-point number


### pointPos : [Int](xref:microsoft.quantum.lang-ref.int)

Point position to use for the fixed-point representation


### odd : [Bool](xref:microsoft.quantum.lang-ref.bool)

If True, evaluates an odd polynomial (see EvaluateOddPolynomialFxP)


### even : [Bool](xref:microsoft.quantum.lang-ref.bool)

If True, evaluates an even polynomial (see EvaluateEvenPolynomialFxP)



## Output : [Double](xref:microsoft.quantum.lang-ref.double)[]

