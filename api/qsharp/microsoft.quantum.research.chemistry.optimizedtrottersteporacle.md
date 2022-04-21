---
uid: Microsoft.Quantum.Research.Chemistry.OptimizedTrotterStepOracle
title: OptimizedTrotterStepOracle function
ms.date: 4/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Research.Chemistry
qsharp.name: OptimizedTrotterStepOracle
qsharp.summary: Returns optimized Trotter step operation and the parameters necessary to run it.
---

# OptimizedTrotterStepOracle function

Namespace: [Microsoft.Quantum.Research.Chemistry](xref:Microsoft.Quantum.Research.Chemistry)

Package: [Microsoft.Quantum.Research.Chemistry](https://nuget.org/packages/Microsoft.Quantum.Research.Chemistry)


Returns optimized Trotter step operation and the parameters necessary to run it.

```qsharp
function OptimizedTrotterStepOracle (qSharpData : Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerEncodingData, trotterStepSize : Double, trotterOrder : Int) : (Int, (Double, (Qubit[] => Unit is Adj + Ctl)))
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