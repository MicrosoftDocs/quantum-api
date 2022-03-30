---
uid: Microsoft.Quantum.Chemistry.JordanWigner.VQE.EstimateTermExpectation
title: EstimateTermExpectation operation
ms.date: 3/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Chemistry.JordanWigner.VQE
qsharp.name: EstimateTermExpectation
qsharp.summary: Computes the energy associated to a given Jordan-Wigner Hamiltonian term
---

# EstimateTermExpectation operation

Namespace: [Microsoft.Quantum.Chemistry.JordanWigner.VQE](xref:Microsoft.Quantum.Chemistry.JordanWigner.VQE)

Package: [Microsoft.Quantum.Chemistry](https://nuget.org/packages/Microsoft.Quantum.Chemistry)


Computes the energy associated to a given Jordan-Wigner Hamiltonian term

```qsharp
operation EstimateTermExpectation (inputStateUnitary : (Qubit[] => Unit is Adj), ops : Pauli[][], coeffs : Double[], nQubits : Int, nSamples : Int) : Double
```


## Description

This operation estimates the expectation value associated to each measurement operator andmultiplies it by the corresponding coefficient, using sampling.The results are aggregated into a variable containing the energy of the Jordan-Wigner term.

## Input

### inputStateUnitary : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[] => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj

The unitary used for state preparation.


### ops : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)[][]

The measurement operators of the Jordan-Wigner term.


### coeffs : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)[]

The coefficients of the Jordan-Wigner term.


### nQubits : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number of qubits required to simulate the molecular system.


### nSamples : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number of samples to use for the estimation of the term expectation.



## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The energy associated to the Jordan-Wigner term.