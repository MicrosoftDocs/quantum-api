---
uid: Microsoft.Quantum.Samples.PhaseEstimation.EstimatePhase
title: EstimatePhase operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.PhaseEstimation
qsharp.name: EstimatePhase
qsharp.summary: >-
  Performs Bayesian phase estimation on a given oracle, using an
  explicit grid to estimate the posterior distribution at each step.
---

# EstimatePhase operation

Namespace: [Microsoft.Quantum.Samples.PhaseEstimation](xref:Microsoft.Quantum.Samples.PhaseEstimation)

Package: [PhaseEstimationSample](https://nuget.org/packages/PhaseEstimationSample)


Performs Bayesian phase estimation on a given oracle, using anexplicit grid to estimate the posterior distribution at each step.

```qsharp
operation EstimatePhase (nGridPoints : Int, nMeasurements : Int, oracle : ((Double, Qubit[]) => Unit is Ctl), eigenstate : Qubit[]) : Double
```


## Input

### nGridPoints : [Int](xref:microsoft.quantum.lang-ref.int)

The number of points at which the posterior should be discretized.


### nMeasurements : [Int](xref:microsoft.quantum.lang-ref.int)

The number of measurements that should be performed.


### oracle : ([Double](xref:microsoft.quantum.lang-ref.double),[Qubit](xref:microsoft.quantum.lang-ref.qubit)[]) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Ctl

A family of unitaries parameterized by time {U(t) | t > 0}, such thatthe phase of the dynamical generator for {U(t)} is to be estimated.


### eigenstate : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

A register initialized to a state |φ〉 such that U(t) = e^{i φ t} |φ〉for some φ to be estimated.



## Output : [Double](xref:microsoft.quantum.lang-ref.double)

An estimate ̂φ of the unknown phase φ.- For the theoretical and algorithmic background see  [ Page 1 of arXiv:1508.00869 ](https://arxiv.org/pdf/1508.00869.pdf#page=1)