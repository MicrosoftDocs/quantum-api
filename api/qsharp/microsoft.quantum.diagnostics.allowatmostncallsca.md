---
uid: Microsoft.Quantum.Diagnostics.AllowAtMostNCallsCA
title: AllowAtMostNCallsCA operation
ms.date: 4/28/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: AllowAtMostNCallsCA
qsharp.summary: >-
  Between a call to this operation and its adjoint, asserts that
  a given operation is called at most a certain number of times.

  Operation calls are considered, if they contain the the specified
  variant.  For example, if `op` is `X`, `Adjoint X` or `Controlled X`
  are also counted, but if `op` is `Controlled X`, only `Controlled X`
  or `Controlled Adjoint X` are counted.
---

# AllowAtMostNCallsCA operation

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Between a call to this operation and its adjoint, asserts thata given operation is called at most a certain number of times.Operation calls are considered, if they contain the the specifiedvariant.  For example, if `op` is `X`, `Adjoint X` or `Controlled X`are also counted, but if `op` is `Controlled X`, only `Controlled X`or `Controlled Adjoint X` are counted.

```qsharp
operation AllowAtMostNCallsCA<'TInput, 'TOutput> (nTimes : Int, op : ('TInput => 'TOutput), message : String) : Unit is Adj
```


## Input

### nTimes : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The maximum number of times that `op` may be called.


### op : 'TInput => 'TOutput 

An operation whose calls are to be restricted.


### message : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

A message to be displayed upon failure.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'TInput


### 'TOutput



## Example

The following snippet will fail when executed on machines whichsupport this diagnostic:```qsharpwithin {    AllowAtMostNCallsCA(3, H, "Too many calls to H.");} apply {    use register = Qubit[4];    // Fails since this calls H four times, rather than the    // allowed maximum of three.    ApplyToEach(H, register);}```Another example illustrates how restricted calls are handled.```qsharpwithin {    // Both tests will pass in this case    AllowAtMostNCallsCA(1, Controlled H, "Too many calls to Controlled H.");    AllowAtMostNCallsCA(2, H, "Too many calls to H or Controlled H.");} apply {    use (a, b) = (Qubit(), Qubit());    H(a);    Controlled H([a], b);    ResetAll([a, b]);}```

## Remarks

This operation may be replaced by a no-op on targets which do notsupport it.