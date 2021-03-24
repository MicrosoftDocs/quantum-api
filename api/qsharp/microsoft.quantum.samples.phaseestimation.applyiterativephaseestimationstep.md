---
uid: Microsoft.Quantum.Samples.PhaseEstimation.ApplyIterativePhaseEstimationStep
title: ApplyIterativePhaseEstimationStep operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.PhaseEstimation
qsharp.name: ApplyIterativePhaseEstimationStep
qsharp.summary: >-
  Performs a single step of iterative phase estimation for a
  given oracle.
---

# ApplyIterativePhaseEstimationStep operation

Namespace: [Microsoft.Quantum.Samples.PhaseEstimation](xref:Microsoft.Quantum.Samples.PhaseEstimation)

Package: [PhaseEstimationSample](https://nuget.org/packages/PhaseEstimationSample)


Performs a single step of iterative phase estimation for agiven oracle.

```qsharp
operation ApplyIterativePhaseEstimationStep (time : Double, inversionAngle : Double, oracle : ((Double, Qubit[]) => Unit is Ctl), eigenstate : Qubit[]) : Result
```


## Input

### time : [Double](xref:microsoft.quantum.lang-ref.double)

Time to evolve under the oracle for during this iteration.


### inversionAngle : [Double](xref:microsoft.quantum.lang-ref.double)

An angle to rotate the control register by before applyingthe controlled oracle.


### oracle : ([Double](xref:microsoft.quantum.lang-ref.double),[Qubit](xref:microsoft.quantum.lang-ref.qubit)[]) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Ctl

Operation representing the unknown $U(t)$ whose phase is to beestimated.


### eigenstate : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

A register initially in a state |φ〉 such that U(t)|φ〉 = e^{i φ time}|φ〉.



## Output : __invalid<Result>__

A measurement result with probability$$\Pr(\texttt{Zero} | \phi; \texttt{time}, \texttt{inversionAngle}) =\cos^2([\phi - \texttt{inversionAngle}] \texttt{time} / 2).$$- For the circuit diagram see FIG. 5 on  [ Page 12 of arXiv:1304.0741 ](https://arxiv.org/pdf/1304.0741.pdf#page=12)