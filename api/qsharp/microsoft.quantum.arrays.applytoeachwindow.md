---
uid: Microsoft.Quantum.Arrays.ApplyToEachWindow
title: ApplyToEachWindow operation
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arrays
qsharp.name: ApplyToEachWindow
qsharp.summary: Applies an operation windowing over an input register.
---

# ApplyToEachWindow operation

Namespace: [Microsoft.Quantum.Arrays](xref:Microsoft.Quantum.Arrays)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies an operation windowing over an input register.

```qsharp
operation ApplyToEachWindow<'T> (windowLen : Int, op : ((Int, 'T[]) => Unit), register : 'T[]) : Unit
```


## Input

### windowLen : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The size of each window.


### op : ([Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals),'T[]) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal) 

An operation on a register that will be provided with the current window and its index.


### register : 'T[]

The register the operation windows over.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T

The type of register elements.

## Example

The example below shows how to use `ApplyToEachWindow` to construct a parity function```qsharpoperation Parity(qubits : Qubit[], target : Qubit) : Unit {    ApplyToEachWindow(1, (_, q) => CNOT(q[0], target), qubits);}```