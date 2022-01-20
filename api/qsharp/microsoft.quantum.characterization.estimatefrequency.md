---
uid: Microsoft.Quantum.Characterization.EstimateFrequency
title: EstimateFrequency operation
ms.date: 1/20/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Characterization
qsharp.name: EstimateFrequency
qsharp.summary: >-
  Given a preparation and measurement, estimates the frequency
  with which that measurement succeeds (returns `Zero`) by
  performing a given number of trials.
---

# EstimateFrequency operation

Namespace: [Microsoft.Quantum.Characterization](xref:Microsoft.Quantum.Characterization)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Given a preparation and measurement, estimates the frequencywith which that measurement succeeds (returns `Zero`) byperforming a given number of trials.

```qsharp
operation EstimateFrequency (preparation : (Qubit[] => Unit), measurement : (Qubit[] => Result), nQubits : Int, nMeasurements : Int) : Double
```


## Input

### preparation : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[] => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal) 

An operation $P$ that prepares a given state $\rho$ onits input register.


### measurement : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[] => [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal) 

An operation $M$ representing the measurement of interest.


### nQubits : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number of qubits on which the preparation and measurementeach act.


### nMeasurements : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number of times that the measurement should be performedin order to estimate the frequency of interest.



## Output : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

An estimate $\hat{p}$ of the frequency with which$M(P(\ket{00 \cdots 0}\bra{00 \cdots 0}))$ returns `Zero`,obtained using the unbiased binomial estimator $\hat{p} =n\_{\uparrow} / n\_{\text{measurements}}$, where $n\_{\uparrow}$ isthe number of `Zero` results observed.This is particularly important on target machines which respectphysical limitations, such that probabilities cannot be measured.