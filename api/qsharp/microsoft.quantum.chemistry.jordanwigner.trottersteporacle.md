---
uid: Microsoft.Quantum.Chemistry.JordanWigner.TrotterStepOracle
title: TrotterStepOracle function
ms.date: 4/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Chemistry.JordanWigner
qsharp.name: TrotterStepOracle
qsharp.summary: Returns Trotter step operation and the parameters necessary to run it.
---

# TrotterStepOracle function

Namespace: [Microsoft.Quantum.Chemistry.JordanWigner](xref:Microsoft.Quantum.Chemistry.JordanWigner)

Package: [Microsoft.Quantum.Chemistry](https://nuget.org/packages/Microsoft.Quantum.Chemistry)


Returns Trotter step operation and the parameters necessary to run it.

```qsharp
function TrotterStepOracle (qSharpData : Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerEncodingData, trotterStepSize : Double, trotterOrder : Int) : (Int, (Double, (Qubit[] => Unit is Adj + Ctl)))
```


## Input

### qSharpData : [JordanWignerEncodingData](xref:Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerEncodingData)

Hamiltonian described by `JordanWignerEncodingData` format.


### trotterStepSize : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

Step size of Trotter integrator.


### trotterOrder : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Order of Trotter integrator.



## Output : ([Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals),([Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals),[Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[] => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl))

A tuple where: `Int` is the number of qubits allocated,`Double` is `1.0/trotterStepSize`, and the operationis the Trotter step.